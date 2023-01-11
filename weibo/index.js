new Vue({
  el: "#myWeibo", // el��Ҫ���������id_name��Ӧ����html: ''���div��id
  data: function () {
    return {
      content: [],
      classOption: {
        singleHeight: 30,
      },
    };
  },
  created() {
    this.getWeiboList();
  },
  methods: {
    // ����Դapi, ��ȡ��ʷ�ϵĽ�������
    getWeiboList() {
      fetch("https://tenapi.cn/resou/", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.content = data.list;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
});