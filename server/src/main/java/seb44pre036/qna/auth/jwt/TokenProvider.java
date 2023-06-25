package seb44pre036.qna.auth.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import seb44pre036.qna.member.entity.Member;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.*;

@Component
public class TokenProvider {
    @Getter
    @Value("${jwt.key}")
    private String secretKey;

    @Getter
    @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes;

    @Getter
    @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes;



    public String generateAccessToken(Member member) {
        Map<String, Object> claims = new HashMap<>();
        Key key = getKeyFromBase64EncodedKey(Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8)));
        // 필요한 클레임 정보 추가
        claims.put("memberId", member.getMemberId());
        claims.put("email", member.getEmail());
        claims.put("roles", member.getRoles());

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(member.getEmail())
                .setExpiration(getTokenExpiration(accessTokenExpirationMinutes))
                .signWith(key)
                .compact();
    }

    public String generateRefreshToken(Member member) {
        Key key = getKeyFromBase64EncodedKey(Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8)));

        return Jwts.builder()
                .setSubject(member.getEmail())
                .setExpiration(getTokenExpiration(refreshTokenExpirationMinutes))
                .setIssuedAt(Calendar.getInstance().getTime())
                .signWith(key)
                .compact();
    }

    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);

        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateRefreshToken() {
        return UUID.randomUUID().toString();
    }

    private Date getTokenExpiration(int expirationMinutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, expirationMinutes);
        return calendar.getTime();
    }
}