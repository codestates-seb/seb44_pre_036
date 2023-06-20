package seb44pre036.qna.answer.controller;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb44pre036.qna.answer.dto.AnswerDto;
import seb44pre036.qna.answer.entity.Answer;
import seb44pre036.qna.answer.mapper.AnswerMapper;
import seb44pre036.qna.answer.service.AnswerService;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.member.service.MemberService;
import seb44pre036.qna.question.service.QuestionService;

import javax.validation.constraints.Positive;
import javax.websocket.server.PathParam;

@RestController
@RequestMapping("/questions/answers")
public class AnswerController {

    private AnswerService answerService;
    private AnswerMapper answerMapper;
    private MemberService memberService;
    private QuestionService questionService;

    @Autowired
    public void AnswerController(AnswerMapper answerMapper ,AnswerService answerService, MemberService memberService, QuestionService questionService){
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
    // 전체 답변 조회 필요시 구현

    //생성
    @PostMapping("/")
    private ResponseEntity postAnswer(@RequestBody AnswerDto.Post requestBody){


        Answer answer = answerMapper.answerPostDtoToAnswer(memberService,answerService,questionService,requestBody);


        AnswerDto.Response response = answerMapper.answerToAnswerDtoResponse(answerService.postAnswer(answer, requestBody.getMemberId()));

        return new ResponseEntity(response,HttpStatus.CREATED);
    }

    //수정
    @PatchMapping("/")
    private ResponseEntity patchAnswer( @RequestBody AnswerDto.Patch requestBody){


        Answer answer = answerMapper.answerPatchDtoToAnswer(memberService,answerService,requestBody);

        //문제 발생
        AnswerDto.Response response = answerMapper.answerToAnswerDtoResponse(answerService.updateAnswer(answer));

        return new ResponseEntity(response,HttpStatus.OK);
    }


    //삭제
    @DeleteMapping("/{answer-Id}")
    private void deleteAnswer(@PathVariable("answer-Id") @Positive long answerId){
        answerService.deleteAnswer(answerId);
    }

    //채택 기능 추가필요

}