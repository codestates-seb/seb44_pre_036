package seb44pre036.qna.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import seb44pre036.qna.answer.dto.AnswerDto;
import seb44pre036.qna.answer.entity.Answer;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.question.dto.QuestionDto;
import seb44pre036.qna.question.entity.Question;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    default Question questionPostToQuestion(QuestionDto.Post requestBody){
        Question question = new Question();
        Member member = new Member();
        member.setMemberId(requestBody.getMemberId());

        question.setTitle(requestBody.getTitle());
        question.setContent(requestBody.getContent());
        question.setViewCount(0);
        question.setCreatedAt(question.getCreatedAt());
        question.setUpdatedAt(question.getUpdatedAt());
        question.setMember(member);

        return question;
    }
    @Mapping(source = "memberId", target = "member.memberId")
    Question questionPatchToQuestion(QuestionDto.Patch requestBody);

    default QuestionDto.Response questionToQuestionResponseDto(Question question){
        List<Answer> answers = question.getAnswers();
        QuestionDto.Response response = new QuestionDto.Response();
        response.setQuestionId(question.getQuestionId());
        response.setTitle(question.getTitle());
        response.setContent(question.getContent());
        response.setViewCount(question.getViewCount());
        response.setCreatedAt(question.getCreatedAt());
        response.setUpdatedAt(question.getUpdatedAt());
        response.setMemberId(question.getMember().getMemberId());
        response.setName(question.getMember().getName());
        response.setAnswers(
                answersToAnswerResponseDtos(answers)
        );

        return response;
    }


    default List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers) {
        List<AnswerDto.Response> responseDtos = new ArrayList<>();

        for(Answer answer : answers) {
            AnswerDto.Response responseDto = new AnswerDto.Response();
            responseDto.setContent(answer.getContent());
            responseDto.setIsAccepted(answer.getAnswerStatus().getStatus());
            responseDto.setMemberId(answer.getMember().getMemberId());
            responseDto.setQuestionId(answer.getQuestion().getQuestionId());
        }

        return responseDtos;
    }

    default List<QuestionDto.ResponseList> questionsToQuestionResponseDtos(List<Question> questions) {
        return questions.stream()
                .map(question -> questionToQuestionResponseList(question))
                .collect(Collectors.toList());
    }
    default QuestionDto.ResponseList questionToQuestionResponseList(Question question) {
        QuestionDto.ResponseList responseList = new QuestionDto.ResponseList();
        responseList.setQuestionId(question.getQuestionId());
        responseList.setTitle(question.getTitle());
        responseList.setContent(question.getContent());
        responseList.setViewCount(question.getViewCount());
        responseList.setCreatedAt(question.getCreatedAt());
        responseList.setUpdatedAt(question.getUpdatedAt());
        responseList.setMemberId(question.getMember().getMemberId());
        responseList.setName(question.getMember().getName());

        return responseList;
    }



}
