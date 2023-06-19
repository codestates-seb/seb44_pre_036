package seb44pre036.qna.exception;

import lombok.Getter;

public enum ExceptionCode {
    ANSWER_NOT_EXIST(409,"Answer not exist"),
    ANSWER_NOT_FOUND(404,"Answer not found"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EMAIL_EXIST(409, "Email exist");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}