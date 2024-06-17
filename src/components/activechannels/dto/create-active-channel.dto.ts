// src/activechannels/dto/create-activechannel.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateActiveChannelDto {
  @ApiProperty()
  channelId: string;

  @ApiProperty({ default: false })
  broadcast: boolean;

  @ApiProperty({ default: true })
  canSendMsgs: boolean;

  @ApiProperty()
  id: string;

  @ApiProperty({ default: 0 })
  participantsCount: number;

  @ApiProperty({ default: false })
  restricted: boolean;

  @ApiProperty({ default: false })
  sendMessages: boolean;

  @ApiProperty()
  title: string;

  @ApiProperty()
  username: string;

  @ApiProperty({ default: 0 })
  wordRestriction: number;

  @ApiProperty({ default: 0 })
  dMRestriction: number;

  @ApiProperty({ type: [String], default: [] })
  availableMsgs: string[];

  @ApiProperty({ type: [String], default: [] })
  reactions: string[];

  @ApiProperty({ default: false })
  banned: boolean;

  @ApiProperty({ default: true })
  megagroup: boolean;

  @ApiProperty({ default: 0 })
  rpm: number;
}
