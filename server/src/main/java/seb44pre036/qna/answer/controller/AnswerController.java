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

import javax.validation.constraints.Positive;
import javax.websocket.server.PathParam;

@RestController
@RequestMapping("/questions/answers")
public class AnswerController {

    private AnswerService answerService;
    private AnswerMapper answerMapper;
    private MemberService memberService;

    @Autowired
    public void AnswerController(AnswerMapper answerMapper ,AnswerService answerService, MemberService memberService){
        this.answerMapper = answerMapper;
        this.answerService = answerService;
        this.memberService = memberService;
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
    @PostMapping("/write")
    private ResponseEntity postAnswer(@RequestBody AnswerDto.Post requestBody){

        Answer answer = answerMapper.answerPostToAnswer(requestBody);

        //회원 id 전달 받아서 답변 작성자 등록 , 임시로 ID 1 배정
        Member member = memberService.findMember(1);

        AnswerDto.Response response = answerMapper.answerToAnswerDtoResponse(answerService.postAnswer(answer, member.getMemberId()));

        return new ResponseEntity(response,HttpStatus.CREATED);
    }

    //수정
    @PatchMapping("/{answer-Id}")
    private ResponseEntity patchAnswer(@PathParam("answer-Id") @Positive long answerId, @RequestBody AnswerDto.Patch requestBody){

        Answer answer = answerMapper.answerPatchAnswer(requestBody);
        AnswerDto.Response response = answerMapper.answerToAnswerDtoResponse(answerService.updateAnswer(answer,answerId));

        return new ResponseEntity(response,HttpStatus.OK);
    }


    //삭제
    @DeleteMapping("/{answer-Id}")
    private void deleteAnswer(@PathVariable("answer-Id") @Positive long answerId){
        answerService.deleteAnswer(answerId);
    }

    @DeleteMapping("/")
    private void deleteAllAnswer(){
        answerService.deleteAllAnswer();
    }

    //채택 기능 추가필요

}