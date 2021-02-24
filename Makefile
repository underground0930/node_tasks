.PHONY:
  wp-backup:
    yarn run wp-env run cli wp ai1wm backup --exclude-spam-comments --exclude-post-revisions --exclude-themes --exclude-inactive-themes --exclude-muplugins --exclude-plugins --exclude-inactive-plugins --exclude-cache --exclude-email-replace

  wp-backup-list:
    yarn run wp-env run cli wp ai1wm list-backups

  check-filename:
  ifndef filename
    $(error filename is undefined)
  endif

  wp-restore:check-filename
    echo "restore from: $(filename)"
    yarn run wp-env run cli wp ai1wm restore $(filename)
