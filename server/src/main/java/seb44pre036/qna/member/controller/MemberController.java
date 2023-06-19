package seb44pre036.qna.member.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import seb44pre036.qna.auth.jwt.JwtTokenizer;
import seb44pre036.qna.member.dto.MemberDto;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.member.mapper.MemberMapper;
import seb44pre036.qna.member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/members")
@Validated
@RequiredArgsConstructor
public class MemberController {

    private final static String MEMBER_DEFAULT_URL = "/members";
    private final MemberService memberService;
    private final MemberMapper mapper;
    private final JwtTokenizer jwtTokenizer;


    @PostMapping
    public ResponseEntity<?> postSignUp(@Valid @RequestBody MemberDto.post memberDto) {
        Member member = mapper.memberPostDtoToMember(memberDto);
        Member responseMember = memberService.createMember(member);

        URI location =
                UriComponentsBuilder
                        .newInstance()
                        .path(MEMBER_DEFAULT_URL + "/{member-id}")
                        .buildAndExpand(responseMember.getMemberId())
                        .toUri();


        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{member-id}")
    public ResponseEntity<?> getMember(@PathVariable("member-id") @Positive long memberId) {
        Member findMember = memberService.findMember(memberId);
        MemberDto.response memberResponse = mapper.memberToMemberResponseDTO(findMember);


        return new ResponseEntity<>(memberResponse, HttpStatus.OK);
    }

    @PatchMapping("/patch/{member-id}")
    public ResponseEntity<?> patchMember(@PathVariable("member-id") @Positive long memberId,
            @Valid @RequestBody MemberDto.patch memberDto) {
        memberDto.setMemberId(memberId);
        Member response = memberService.updateMember(mapper.memberPatchDtoToMember(memberDto));
        MemberDto.response mappingResponse = mapper.memberToMemberResponseDTO(response);

        return new ResponseEntity<>(mappingResponse, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{member-id}")
    public ResponseEntity<?> deleteMember(@PathVariable("member-id") long memberId) {
//        Member findMember = memberService.findMember(memberId);
        memberService.deleteMember(memberId);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
