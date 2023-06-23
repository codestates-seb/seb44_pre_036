package seb44pre036.qna.question.dto;


import lombok.Getter;
import lombok.Setter;
import seb44pre036.qna.answer.dto.AnswerDto;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;


public class QuestionDto {
    @Getter @Setter
    public static class Post {

        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;

    }
    @Getter
    @Setter
    public static class Patch {

        private long questionId;

        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;

    }
    @Getter
    @Setter
    public static class Response { // 질문 상세페이지

        private long questionId;
        private String title;
        private String content;
        private long viewCount;
        private long voteCount;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private long memberId;
        private String name;
        private List<AnswerDto.Response> answers;

    }

    @Getter
    @Setter
    public static class ResponseList { // 질문 리스트 페이지

        private long questionId;
        private String title;
        private String content;
        private long viewCount;
        private long voteCount;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private long memberId;
        private String name;

    }

//    @Getter
//    @Setter
//    public static class Vote {
//        private long memberId;
//
//        private long questionId;
//
//        private boolean isVoted;
//    }

}