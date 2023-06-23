package seb44pre036.qna.exception;

import lombok.Getter;
import org.springframework.http.ResponseEntity;

import javax.servlet.http.HttpServletResponse;

public class BusinessLogicException extends RuntimeException {

    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }

}