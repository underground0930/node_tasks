jQuery(function ($) {
  function limit_post_category_select(taxonomy) {
    // 投稿画面のカテゴリー選択を制限
    const $lists = $(`#${taxonomy}checklist`);
    if ($lists.length > 0) {
      $lists.find("input[type=checkbox]").on("click", function () {
        const checked = $(this).prop("checked");
        if (checked) {
          $lists.find("input[type=checkbox]").prop("checked", false);
          $(this).prop("checked", true);
        }
      });
      $lists.before(
        '<p style="padding-top:5px; font-weight: bold;">カテゴリーは1つしか選択できません</p>'
      );
    }
  }

  function limit_index_category_select(taxonomy) {
    // クイック編集のカテゴリー選択を制限
    const $lists = $(`ul.${taxonomy}-checklist`);
    if ($lists.length > 0) {
      $lists.find("input[type=checkbox]").on("click", function () {
        const checked = $(this).prop("checked");
        if (checked) {
          $(this)
            .parents(`ul.${taxonomy}-checklist`)
            .find("input[type=checkbox]")
            .prop("checked", false);
          $(this).prop("checked", true);
        }
      });
    }
  }

  ["news_category"].forEach((taxonomy) => {
    limit_post_category_select(taxonomy);
    limit_index_category_select(taxonomy);
  });
});
