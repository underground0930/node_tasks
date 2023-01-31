import { Common } from '@/pages/common'
import { Top } from '@/pages/top'

// 実行
;(async () => {
  const pageScript = document.body.dataset.script

  new Common()

  switch (pageScript) {
    case 'top':
      new Top()
      break
    case 'hoge':
      console.log('hoge')
      break
    default:
  }
})()
