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

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AnswerService {
    private MemberService memberService;
    private AnswerRepository answerRepository;
    private QuestionService questionService;

    @Autowired
    public void AnswerService(AnswerRepository answerRepository, MemberService memberService, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
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

        // 본인 질문에 답변 등록 불가
        if (writer.getMemberId() == user.getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_CREATED);
        } else {
            Answer createAnswer = answerRepository.save(answer);
            // 회원이 작성한 답변 추가
            user.addAnswer(createAnswer);
            // 질문에 작성된 답변 추가
            //question.addAnswer(createAnswer);
            return createAnswer;
        }
    }

    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
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
}