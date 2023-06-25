package seb44pre036.qna.questionVote.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

public class QuestionVoteDto {
    @Getter
    @Setter
    public static class Patch {
        private long memberId;

        @NotBlank(message = "질문 번호를 입력하세요.")
        private long questionId;

        @NotBlank(message = "투표 여부를 입력하세요.")
        private boolean vote;
    }

    @Getter
    @Builder
    public static class Response {
        private int score;
    }
}
