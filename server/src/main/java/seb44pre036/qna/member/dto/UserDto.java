package seb44pre036.qna.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import seb44pre036.qna.answer.entity.Answer;
import seb44pre036.qna.question.entity.Question;

import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
@Builder
public class UserDto {
    private Long memberId;
    private String name;
    private String email;
    private List<String> authorities;
    private List<Question> questions;
    private List<Answer> answers;
    private LocalDateTime createdTime;
    private LocalDateTime modifiedTime;
}
