package seb44pre036.qna.member.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb44pre036.qna.member.dto.MemberDto;
import seb44pre036.qna.member.entity.Member;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-26T00:07:12+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberDto.post memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( memberPostDto.getEmail() );
        member.setName( memberPostDto.getName() );
        member.setPassword( memberPostDto.getPassword() );

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberDto.patch memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( memberPatchDto.getMemberId() );
        member.setEmail( memberPatchDto.getEmail() );
        member.setName( memberPatchDto.getName() );
        member.setPassword( memberPatchDto.getPassword() );

        return member;
    }

    @Override
    public MemberDto.response memberToMemberResponseDTO(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberDto.response response = new MemberDto.response();

        response.setMemberId( member.getMemberId() );
        response.setEmail( member.getEmail() );
        response.setName( member.getName() );

        return response;
    }
}
