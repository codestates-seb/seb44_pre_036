package seb44pre036.qna.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb44pre036.qna.member.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
}
