package seb44pre036.qna.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EMAIL_EXIST(409, "Email exist"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    ACCESS_DENIED(403, "Access Denied");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
