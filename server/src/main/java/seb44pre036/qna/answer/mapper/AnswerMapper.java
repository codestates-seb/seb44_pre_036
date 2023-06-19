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

    Answer answerPostToAnswer(AnswerDto.Post requestBody);
    Answer answerPatchAnswer(AnswerDto.Patch requestBody);
    AnswerDto.Response answerToAnswerDtoResponse(Answer answer);
}