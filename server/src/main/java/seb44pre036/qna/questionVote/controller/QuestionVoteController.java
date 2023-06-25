package seb44pre036.qna.questionVote.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb44pre036.qna.auth.interceptor.JwtParseInterceptor;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.member.service.MemberService;
import seb44pre036.qna.question.entity.Question;
import seb44pre036.qna.question.service.QuestionService;
import seb44pre036.qna.questionVote.dto.QuestionVoteDto;
import seb44pre036.qna.questionVote.mapper.QuestionVoteMapper;
import seb44pre036.qna.questionVote.service.QuestionVoteService;

@RestController
@RequestMapping("/questions/vote")
@RequiredArgsConstructor
public class QuestionVoteController {
    private final QuestionVoteService questionVoteService;
    private final MemberService memberService;
    private final QuestionService questionService;
    private final QuestionVoteMapper mapper;

    @PatchMapping
    public ResponseEntity patchQuestionVote(@RequestBody QuestionVoteDto.Patch requestBody) {
        long authenticationMemberId = JwtParseInterceptor.getAuthenticatedMemberId();
        requestBody.setMemberId(authenticationMemberId);

        Member member = memberService.findMember(requestBody.getMemberId());
        Question question = questionService.findVerifiedQuestion(requestBody.getQuestionId());

        if (requestBody.isVote()) {
            questionVoteService.questionVoteUp(member, question);
        } else {
            questionVoteService.questionVoteDown(member, question);
        }
        return new ResponseEntity<>(mapper.questionToQuestionVoteResponse(question), HttpStatus.OK);

    }
}
