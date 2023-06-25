package seb44pre036.qna.member.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import seb44pre036.qna.auth.interceptor.JwtParseInterceptor;
import seb44pre036.qna.auth.jwt.JwtTokenizer;
import seb44pre036.qna.auth.jwt.TokenProvider;
import seb44pre036.qna.auth.utils.JwtUtils;
import seb44pre036.qna.exception.BusinessLogicException;
import seb44pre036.qna.exception.ExceptionCode;
import seb44pre036.qna.member.dto.MemberDto;
import seb44pre036.qna.member.dto.UserDto;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.member.mapper.MemberMapper;
import seb44pre036.qna.member.mapper.UserMapper;
import seb44pre036.qna.member.service.MemberService;


import javax.annotation.PostConstruct;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.Enumeration;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/members")
@Validated
@RequiredArgsConstructor
public class MemberController {

    private final static String MEMBER_DEFAULT_URL = "/members";
    private final MemberService memberService;
    private final MemberMapper mapper;
    private final UserMapper userMapper;
    private final JwtUtils jwtUtils;
    private final TokenProvider tokenProvider;

    @PostConstruct
    public void postConstruct() {
        Member member1 = new Member("admin@gmail.com", "어드민", "12345qwert");
        Member member2 = new Member("potato@naver.com", "김감자", "12345qwert");

        memberService.createMember(member1);
        memberService.createMember(member2);
    }

    @PostMapping
    public ResponseEntity<?> postSignUp(@Valid @RequestBody MemberDto.post memberDto, HttpServletResponse response) {
        Member member = mapper.memberPostDtoToMember(memberDto);
        Member responseMember = memberService.createMember(member);

        URI location =
                UriComponentsBuilder
                        .newInstance()
                        .path(MEMBER_DEFAULT_URL + "/{member-id}")
                        .buildAndExpand(responseMember.getMemberId())
                        .toUri();

        String accessToken = tokenProvider.generateAccessToken(responseMember);
        String refreshToken = tokenProvider.generateRefreshToken(responseMember);

        response.setHeader("MemberId", member.getMemberId().toString());
        response.setHeader("Authorization", "Bearer " + accessToken);
//        response.setHeader("Refresh", refreshToken);

        Cookie refreshTokenCookie = new Cookie("RefreshToken", refreshToken);
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setPath("/");
        refreshTokenCookie.setMaxAge(86400);
        response.addCookie(refreshTokenCookie);

        return ResponseEntity.created(location).build();
    }
    @GetMapping("/me")
    public ResponseEntity getMemberMyPage(HttpServletRequest request) {
        long authenticationMemberId = JwtParseInterceptor.getAuthenticatedMemberId();
        return new ResponseEntity<>(mapper.memberToMyPage
                (memberService.findMember(authenticationMemberId)), HttpStatus.OK);
    }

//    @GetMapping("/me")
//    public ResponseEntity<?> getLoggedInUserDetails(HttpServletRequest request) {
//        Map<String, Object> jwsClaims = jwtUtils.getJwsClaimsFromRequest(request);
//        int memberId = (int) jwsClaims.get("memberId");
//        Member findmember = memberService.findMember(memberId);
//        UserDto userDto = userMapper.memberToUserDto(findmember);
//
//        log.info("내 정보 응답완료");
//        return new ResponseEntity<>(userDto, HttpStatus.OK);
//    }



    @GetMapping("/{member-id}")
    public ResponseEntity<?> getMember(@PathVariable("member-id") @Positive long memberId) {
        Member findMember = memberService.findMember(memberId);
        MemberDto.response memberResponse = mapper.memberToMemberResponseDTO(findMember);

//        response.setHeader("Access-Control-Allow-Origin", "*");
//        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//        response.setHeader("Access-Control-Allow-Headers", "authorization, content-type");
//        response.setHeader("Access-Control-Max-Age", "3600");


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
