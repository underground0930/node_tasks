import { Common } from '@/common/script'
import { Top } from '@/pages/top'

// 実行
;(async () => {
  const bodyClasses = document.body.classList

  new Common()

  if (bodyClasses.contains('top')) {
    new Top()
  } else if (bodyClasses.contains('hoge')) {
    console.log('hoge')
  } else {
    console.log('nothing')
  }
})()
