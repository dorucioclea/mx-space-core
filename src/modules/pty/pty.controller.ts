import { Get } from '@nestjs/common'

import { ApiController } from '~/common/decorators/api-controller.decorator'
import { Auth } from '~/common/decorators/auth.decorator'
import { ApiName } from '~/common/decorators/openapi.decorator'

import { PTYService } from './pty.service'

@ApiName
@Auth()
@ApiController({ path: 'pty' })
export class PTYController {
  constructor(private readonly service: PTYService) {}

  @Get('/record')
  async getPtyLoginRecord() {
    return this.service.getLoginRecord()
  }
}
