package seb44pre036.qna.answer.service;

import org.springframework.beans.factory.annotation.Autowired;
import seb44pre036.qna.answer.dto.AnswerDto;
import seb44pre036.qna.answer.entity.AnswerVote;
import seb44pre036.qna.answer.repository.AnswerRepository;
import seb44pre036.qna.answer.repository.AnswerVoteRepository;
import seb44pre036.qna.exception.BusinessLogicException;
import seb44pre036.qna.exception.ExceptionCode;
import seb44pre036.qna.answer.entity.Answer;
import org.springframework.stereotype.Service;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.member.service.MemberService;
import seb44pre036.qna.question.entity.Question;
import seb44pre036.qna.question.service.QuestionService;


import java.time.LocalDateTime;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AnswerService {
    private MemberService memberService;
    private AnswerRepository answerRepository;
    private QuestionService questionService;
    private AnswerVoteRepository answerVoteRepository;

    @Autowired
    public void AnswerService(AnswerRepository answerRepository, MemberService memberService, QuestionService questionService, AnswerVoteRepository answerVoteRepository) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
        this.answerVoteRepository = answerVoteRepository;
    }

    public Answer postAnswer(Answer answer) {
        // 질문 등록 여부 검사
        Question question = questionService.findVerifiedQuestion(answer.
                getQuestion().
                getQuestionId());

        // 답변 등록자
        Member user = memberService.findVerifiedMember(answer.
                getMember().
                getMemberId());

        // 질문 작성자
        Member writer = memberService.
                findVerifiedMember(question.getMember().getMemberId());

        // 해당 질문에 이미 답변을 등록했는지 검사
        for(Answer answerOfQuestion :question.getAnswers()){
            if(answerOfQuestion.getMember().getMemberId() == user.getMemberId()){
                throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED);
            }
        }

        // 본인 질문에 답변 등록 불가 조건
        if (writer.getMemberId() == user.getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_CREATED);
        } else {
            Answer createAnswer = answerRepository.save(answer);
            // 회원이 작성한 답변 추가
            user.addAnswer(createAnswer);
            // 질문에 작성된 답변 추가
            question.addAnswers(createAnswer);
            return createAnswer;
        }
    }

    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }


    public List<Answer> findAnswers(AnswerDto.Find requestBody){

        // 질문 정보 가져오기
        Question question = questionService.findVerifiedQuestion(requestBody.getQuestionId());

        // 질문에 등록된 답변들 불러오기

        List<Answer> answers = new ArrayList<>();
        for(Answer answer : question.getAnswers()){
            answers.add(answer);
        }


        //HighestScore
        if(requestBody.getSortBy()==1){
            return answers.stream().sorted(Comparator.comparing(Answer::getVote,Comparator.reverseOrder())).collect(Collectors.toList());
        }
        // Newest
        else if (requestBody.getSortBy()==2) {
            //return answerRepository.sortedByScore(requestBody.getQuestionId());
            return answerRepository.sortedByCreatedAtDesc(question.getQuestionId());}

        // Oldest
        else if (requestBody.getSortBy()==3){
            //return answers.stream().sorted(Comparator.comparing(Answer::getUpdatedAt)).collect(Collectors.toList());
            return answerRepository.sortedByCreatedAtAsc(question.getQuestionId());
        }

        // Only Selected
        else if (requestBody.getSortBy()==4){
            return answerRepository.filterBySelected(question.getQuestionId());
        }

        throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_EXIST_FUNCTION);
    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer
                        .orElseThrow(() ->
                                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

    public Answer updateAnswer(long memberId, Answer answer) {
        Answer preAnswer = findVerifiedAnswer(answer.getAnswerId());

        // 답변 최초 작성자
        final long writerId = preAnswer.getMember().getMemberId();

        // 답변자 본인일 경우 수정 가능
        if (memberId == writerId) {
            // update
            Optional.ofNullable(answer.getContent()).ifPresent(newContent -> preAnswer.setContent(newContent));
            Optional.ofNullable(LocalDateTime.now()).ifPresent(updateAt -> preAnswer.setUpdatedAt(updateAt));
            return answerRepository.save(preAnswer);
        } else {
            throw (new BusinessLogicException(ExceptionCode.ACCESS_DENIED));
        }
    }

    public void deleteAnswer(long answerId,long memberId) {
        Answer answer = findAnswer(answerId);
        long writerId = answer.getMember().getMemberId();

        // 답변자일 경우 삭제 가능
        if(memberId == writerId){
            answerRepository.delete(answer);
        }
        else{
            throw(new BusinessLogicException(ExceptionCode.ACCESS_DENIED));
        }
    }

    public Answer selectingAnswer(long answerId, long memberId) {

        //존재하는 답변인지 확인
        Answer answer = findAnswer(answerId);

        // 질문 작성자
        final long writerId = answer.getQuestion().getMember().getMemberId();

        // 질문자일 경우에만 채택 가능
        if (memberId != writerId) {
            throw (new BusinessLogicException(ExceptionCode.ACCESS_DENIED));
        } else {
            answer.setAnswerStatus(Answer.AnswerStatus.ANSWER_SELECT);
            return answerRepository.save(answer);
        }
    }

    public Answer voteAnswer(AnswerVote answerVote){
        int vote=0;


        Answer answer = answerVote.getAnswer();
        // 존재하는 맴버인지 확인
        memberService.findVerifiedMember(answerVote.getVotedMemberId());

        // 답변 투표 정보 가져오기
        vote +=answer.getVote();

        // 자신의 답변에 추천 x
        if(answerVote.getVotedMemberId() == answer.getMember().getMemberId()){
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED);
        }

        // 투표는 한번만
        for(AnswerVote element : answer.getAnswerVotes()){
            if(answerVote.getVotedMemberId() == element.getVotedMemberId()){
                throw new BusinessLogicException(ExceptionCode.ANSWER_ALREADY_VOTED);
            }
        }

        // 추천 여부
        if(answerVote.isRecommend()==true){
            answer.setVote(vote+1);
        }
        else{
            answer.setVote(vote-1);
        }

        answer.addVotedMembers(answerVote);
        answerVoteRepository.save(answerVote);

        return findAnswer(answerVote.getAnswer().getAnswerId());
    }

    }
