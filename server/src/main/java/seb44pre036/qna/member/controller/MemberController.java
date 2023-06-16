package seb44pre036.qna.member.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb44pre036.qna.member.dto.MemberDto;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.member.mapper.MemberMapper;
import seb44pre036.qna.member.repository.MemberRepository;
import seb44pre036.qna.member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
@Validated
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;

    @PostMapping("/signup")
    public ResponseEntity<?> postSignUp(@Valid @RequestBody MemberDto.post memberDto) {
        Member member = mapper.memberPostDtoToMember(memberDto);
        Member response = memberService.createMember(member);


        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/signup")
    public ResponseEntity<?> getSignUpPage(@Valid @RequestBody MemberDto.post memberDto) {
        Member member = mapper.memberPostDtoToMember(memberDto);
        Member response = memberService.createMember(member);


        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("/patch/{member-id}")
    public ResponseEntity<?> patchMember(@PathVariable("member-id") @Positive long memberId,
            @Valid @RequestBody MemberDto.patch memberDto) {
        memberDto.setMemberId(memberId);
        Member response = memberService.updateMember(mapper.memberPatchDtoToMember(memberDto));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
