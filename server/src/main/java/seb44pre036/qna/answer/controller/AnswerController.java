package seb44pre036.qna.answer.controller;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import seb44pre036.qna.answer.dto.AnswerDto;
import seb44pre036.qna.answer.entity.Answer;
import seb44pre036.qna.answer.mapper.AnswerMapper;
import seb44pre036.qna.answer.service.AnswerService;
import seb44pre036.qna.auth.interceptor.JwtParseInterceptor;
import seb44pre036.qna.auth.jwt.JwtTokenizer;
import seb44pre036.qna.auth.userdetails.MemberDetailsService;
import seb44pre036.qna.auth.utils.JwtUtils;
import seb44pre036.qna.exception.BusinessLogicException;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.member.service.MemberService;
import seb44pre036.qna.question.service.QuestionService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Positive;
import javax.websocket.server.PathParam;
import java.util.Map;

@RestController
@RequestMapping("/questions/answers")
public class AnswerController {

    private AnswerService answerService;
    private AnswerMapper answerMapper;
    private MemberService memberService;
    private QuestionService questionService;


    @Autowired
    public void AnswerController(AnswerMapper answerMapper,AnswerService answerService, MemberService memberService, QuestionService questionService){
        this.answerMapper = answerMapper;
        this.answerService = answerService;
        this.memberService = memberService;
        this.questionService = questionService;

    }

    //조회
    @GetMapping("/{answer-Id}")
    private ResponseEntity getAnswer(@PathVariable("answer-Id") @Positive long answerId){

        Answer answer = answerService.findAnswer(answerId);
        AnswerDto.Response response = answerMapper.answerToAnswerDtoResponse(answer);

        return new ResponseEntity(response, HttpStatus.OK);
    }


    //생성
    @PostMapping("/")
    private ResponseEntity postAnswer(@RequestBody AnswerDto.Post requestBody){

        requestBody.setMemberId(JwtParseInterceptor.getAuthenticatedMemberId());

        Answer answer = answerMapper.answerPostDtoToAnswer(memberService,answerService,questionService,requestBody);
        AnswerDto.Response response = answerMapper.answerToAnswerDtoResponse(answerService.postAnswer(answer));

        return new ResponseEntity(response,HttpStatus.CREATED);
    }



    //수정
    @PatchMapping("/")
    private ResponseEntity patchAnswer( @RequestBody AnswerDto.Patch requestBody){

        // 수정을 요청한 유저 Id
        requestBody.setMemberId(JwtParseInterceptor.getAuthenticatedMemberId());
        final long userId= requestBody.getMemberId();

        Answer answer = answerMapper.answerPatchDtoToAnswer(memberService,answerService,questionService,requestBody);
        AnswerDto.Response response = answerMapper.answerToAnswerDtoResponse(answerService.updateAnswer(userId,answer));

        return new ResponseEntity(response,HttpStatus.OK);
    }


    //삭제
    @DeleteMapping("/{answer-Id}")
    private void deleteAnswer(@PathVariable("answer-Id") @Positive long answerId){
        long userId = JwtParseInterceptor.getAuthenticatedMemberId();
        answerService.deleteAnswer(answerId,userId);
    }

    //채택
    @PatchMapping("/select")
    private ResponseEntity selectAnswer(@RequestBody AnswerDto.Select requestBody){

        // 채택을 시도하는 유저 정보
        requestBody.setMemberId(JwtParseInterceptor.getAuthenticatedMemberId());

        Answer answer = answerService.selectingAnswer(requestBody.getAnswerId(), requestBody.getMemberId());
        AnswerDto.Response response = answerMapper.answerToAnswerDtoResponse(answer);

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    // 추천
    //@PatchMapping("/vote/")
}