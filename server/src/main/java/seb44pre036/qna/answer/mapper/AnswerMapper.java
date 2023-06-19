package seb44pre036.qna.answer.mapper;

import org.mapstruct.Mapper;
import seb44pre036.qna.answer.dto.AnswerDto;
import seb44pre036.qna.answer.entity.Answer;
import seb44pre036.qna.answer.repository.AnswerRepository;
import seb44pre036.qna.answer.service.AnswerService;
import seb44pre036.qna.member.dto.MemberDto;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.member.service.MemberService;
import seb44pre036.qna.question.entity.Question;


@Mapper(componentModel = "spring")
public interface AnswerMapper  {

    default Answer answerPostDtoToAnswer(MemberService memberService, AnswerService answerService, AnswerDto.Post answerPostDto){
        Answer answer = new Answer();
        answer.setContent(answerPostDto.getContent());
        answer.setAccepted(false);
        //answer.setQuestion();
        answer.setMember(memberService.findVerifiedMember(answerPostDto.getMemberId()));

        //수정 필요
        answer.setQuestion(new Question());

        return answer;
    }


    default Answer answerPatchDtoToAnswer(MemberService memberService, AnswerService answerService, AnswerDto.Patch answerPatchDto){
        Answer answer = new Answer();

        answer.setAnswerId(answerPatchDto.getAnswerId());
        answer.setContent(answerPatchDto.getContent());
        answer.setAccepted(answerPatchDto.isAccepted());

        return answer;
    }

    default AnswerDto.Response answerToAnswerDtoResponse(Answer answer){
        AnswerDto.Response answerDtoResponse = new AnswerDto.Response();
        answerDtoResponse.setAnswerId(answer.getAnswerId());
        answerDtoResponse.setAccepted(answer.isAccepted());
        answerDtoResponse.setContent(answer.getContent());
        answerDtoResponse.setCreatedAt(answer.getCreatedAt());
        answerDtoResponse.setUpdatedAt(answer.getUpdatedAt());

        answerDtoResponse.setMemberId(answer.getMember().getMemberId());
        answerDtoResponse.setQuestionId(answer.getQuestion().getQuestionId());

        return answerDtoResponse;
    }
}