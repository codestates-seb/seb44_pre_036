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
import seb44pre036.qna.question.service.QuestionService;


@Mapper(componentModel = "spring")
public interface AnswerMapper  {


    default Answer answerPostDtoToAnswer(MemberService memberService, AnswerService answerService,QuestionService questionService, AnswerDto.Post answerPostDto){
        Answer answer = new Answer();
        answer.setContent(answerPostDto.getContent());

        answer.setMember(memberService.findVerifiedMember(answerPostDto.getMemberId()));

        //수정 필요 ( question post가 등록되지 않아 builder 사용으로 질문 객체 직접 주입)
        answer.setQuestion(questionService.findVerifiedQuestion(answerPostDto.getQuestionId()));
//        Question question = Question.builder().content("dasda").title("dada").viewCount(6).build();
//        answer.setQuestion(question);


        return answer;
    }


    default Answer answerPatchDtoToAnswer(MemberService memberService, AnswerService answerService,  AnswerDto.Patch answerPatchDto){
        Answer answer = new Answer();

        answer.setAnswerId(answerPatchDto.getAnswerId());
        answer.setContent(answerPatchDto.getContent());

        return answer;
    }

    default AnswerDto.Response answerToAnswerDtoResponse(Answer answer){
        AnswerDto.Response answerDtoResponse = new AnswerDto.Response();
        answerDtoResponse.setAnswerId(answer.getAnswerId());
        answerDtoResponse.setAccepted(answerDtoResponse.isAccepted());
        answerDtoResponse.setContent(answer.getContent());
        answerDtoResponse.setCreatedAt(answer.getCreatedAt());
        answerDtoResponse.setUpdatedAt(answer.getUpdatedAt());

        answerDtoResponse.setMemberId(answer.getMember().getMemberId());

        //질문 쪽 post가 되지 않아 수동 설정
        answerDtoResponse.setQuestionId(answer.getQuestion().getQuestionId());
        //answerDtoResponse.setQuestionId(1);

        return answerDtoResponse;
    }

}