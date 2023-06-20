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
        //회원이 존재하는지 확인
        memberService.findVerifiedMember(answer.getMember().getMemberId());

        return answerRepository.save(answer);
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

        // 존재하는 답변인지 확인
        Answer preAnswer = findVerifiedAnswer(answer.getAnswerId());

        // update
        Optional.ofNullable(answer.getContent()).ifPresent(newContent -> preAnswer.setContent(newContent));
        Optional.ofNullable(answer.getUpdatedAt()).ifPresent(updateAt -> preAnswer.setUpdatedAt(updateAt));

        return answerRepository.save(preAnswer);
    }

    public void deleteAnswer(long answerId){
        Answer answer = findAnswer(answerId);
        answerRepository.delete(answer);
        //answerRepository.deleteAnswer(answerId);
    }
}