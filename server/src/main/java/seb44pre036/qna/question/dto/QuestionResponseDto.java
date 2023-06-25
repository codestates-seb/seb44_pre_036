package seb44pre036.qna.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
public class QuestionResponseDto {
    private long questionId;
    private String questionTitle;
    private String questionContent;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private long memberId;
    private String memberName;

    @Getter
    @Builder
    public static class QuestionMemberResponseForList {
        private Long questionId;
        private String questionsTitle;
    }
}