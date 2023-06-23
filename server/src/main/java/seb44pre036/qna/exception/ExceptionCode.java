package seb44pre036.qna.exception;

import lombok.Getter;

public enum ExceptionCode {
    ANSWER_NOT_CREATED(406,"Answer not created"),
    ANSWER_NOT_EXIST(409,"Answer not exist"),
    ANSWER_NOT_FOUND(404,"Answer not found"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EMAIL_EXIST(409, "Email exist"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    ACCESS_DENIED(403, "Access Denied"),
    REFRESH_TOKEN_EXPIRED(401, "Refresh token expired");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}