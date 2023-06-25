package seb44pre036.qna.questionVote.mapper;

import org.mapstruct.Mapper;
import seb44pre036.qna.question.entity.Question;
import seb44pre036.qna.questionVote.dto.QuestionVoteDto;

@Mapper(componentModel = "spring")
public interface QuestionVoteMapper {
    default QuestionVoteDto.Response questionToQuestionVoteResponse(Question question) {
        return QuestionVoteDto.Response.builder()
                .score(question.getVoteCountSum()).build();
    }
}
