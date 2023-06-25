package seb44pre036.qna.member.mapper;

import org.mapstruct.Mapper;
import seb44pre036.qna.member.dto.UserDto;
import seb44pre036.qna.member.entity.Member;


@Mapper(componentModel = "spring")
public interface UserMapper {
    default UserDto memberToUserDto(Member member) {
        return UserDto.builder()
                .memberId(member.getMemberId())
                .name(member.getName())
                .email(member.getEmail())
                .authorities(member.getRoles())
                .questions(member.getQuestions())
                .answers(member.getAnswers())
                .createdTime(member.getCreatedAt())
                .modifiedTime(member.getUpdatedAt())
                .build();
    }
}
