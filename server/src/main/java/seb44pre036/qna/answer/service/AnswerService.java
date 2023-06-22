package seb44pre036.qna.answer.service;

import org.springframework.beans.factory.annotation.Autowired;
import seb44pre036.qna.answer.repository.AnswerRepository;
import seb44pre036.qna.exception.BusinessLogicException;
import seb44pre036.qna.exception.ExceptionCode;
import seb44pre036.qna.answer.entity.Answer;
import org.springframework.stereotype.Service;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.member.service.MemberService;
import seb44pre036.qna.question.entity.Question;
import seb44pre036.qna.question.service.QuestionService;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AnswerService {
    private MemberService memberService;
    private AnswerRepository answerRepository;
    private QuestionService questionService;

    @Autowired
    public void AnswerService(AnswerRepository answerRepository, MemberService memberService /*,QuestionService questionService*/){
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
    }

    public Answer postAnswer (Answer answer){

        // 본인 질문에 답변 등록 불가
        if(answer.getMember().getMemberId() == answer.getQuestion().getMember().getMemberId()){
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_CREATED);
        }

        Answer createAnswer = answerRepository.save(answer);

        // 맴버에 답변 추가
        // answer.getMember().addAnswer(createAnswer);


        return createAnswer;
    }

    public Answer findAnswer(long answerId){

        return findVerifiedAnswer(answerId);
    }

    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer
                        .orElseThrow(() ->
                                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

    public Answer updateAnswer(Answer answer){
        // 답변자일 경우 수정 가능

        // 존재하는 답변인지 확인
        Answer preAnswer = findVerifiedAnswer(answer.getAnswerId());

        // update
        Optional.ofNullable(answer.getContent()).ifPresent(newContent -> preAnswer.setContent(newContent));
        Optional.ofNullable(LocalDateTime.now()).ifPresent(updateAt -> preAnswer.setUpdatedAt(updateAt));
        Optional.ofNullable(answer.getAnswerStatus()).ifPresent(status-> preAnswer.setAnswerStatus(status));
        return answerRepository.save(preAnswer);
    }

    public void deleteAnswer(long answerId){
        // 질문 작성자, 답변자일 경우 삭제 가능

        Answer answer = findAnswer(answerId);
        answerRepository.delete(answer);
    }

    public Answer selectingAnswer(long answerId,long memberId){
        //존재하는 답변인지 확인
        Answer answer = findAnswer(answerId);
        // 질문자일 경우에만 채택 가능
        if(memberId == answer.getQuestion().getMember().getMemberId()) {
            answer.setAnswerStatus(Answer.AnswerStatus.ANSWER_SELECT);
            return updateAnswer(answer);
        }

        return answer;
    }
}