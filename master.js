function submitOrder(count) {
  if (textStartsWith("结算(").exists()) {
    textStartsWith("结算(").findOne().parent().click();
  } else if (text("我知道了").exists()) {
    toast("关闭我知道了");
    text("我知道了").findOne().parent().click();
  } else if (text("重新加载").exists()) {
    toast("重新加载");
    text("重新加载").findOne().parent().click();
  } else if (text("立即支付").exists()) {
    text("立即支付").findOne().parent().click();
  } else if (text("确认支付").exists()) {
    const music =
      "/storage/emulated/0/netease/cloudmusic/Music/Joel Hanson Sara Groves - Traveling Light.mp3";
    media.playMusic(music);
    sleep(media.getMusicDuration());
  } else {
    toast("抢个屁！");
    exit;
  }
  sleep(800);
  if (count > 10000) {
    toast("没抢到");
    exit;
  }

  submitOrder(count++);
}
