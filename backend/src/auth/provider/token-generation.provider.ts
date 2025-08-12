import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { AdminInfo } from '../interface/admin-info.interface';
import { Admin } from 'src/admin/entity/admin.entity';
@Injectable()
export class TokenGenerationProvider {
  constructor(
    /**
     * Injecting jwt service
     */
    private readonly jwtService: JwtService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  public async signtoken<T>(admin_id: number, expiresIn: number, payload: T) {
    return await this.jwtService.signAsync(
      {
        sub: admin_id,
        ...payload,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn: expiresIn,
      },
    );
  }

  public async generateTokens(admin: Admin) {
    const [accesssToken, refreshToken] = await Promise.all([
      await this.signtoken<Partial<AdminInfo>>(
        admin.id,
        Number(this.jwtConfiguration.accessTokenTTL),
        {
          email: admin.email,
        },
      ),
      await this.signtoken<Partial<AdminInfo>>(
        admin.id,
        Number(this.jwtConfiguration.refreshTokenTTL),
        {
          email: admin.email,
        },
      ),
    ]);
    return {
      accesssToken,
      refreshToken,
    };
  }
}
