package seb44pre036.qna.member.mapper;

import org.mapstruct.Mapper;
import seb44pre036.qna.member.dto.MemberDto;
import seb44pre036.qna.member.entity.Member;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberDto.post memberPostDto);
    Member memberPatchDtoToMember(MemberDto.patch memberPatchDto);

}
