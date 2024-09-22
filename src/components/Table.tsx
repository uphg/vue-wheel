/* eslint-disable */
// @ts-nocheck

const Form = defineComponent({
  setup() {
    const tableData = ref([])
    const paging = ref({
      page: 1,
      pageSize: 10, 
    })

    function onDataChange(data) {
      tableData.value = data
    }

    function onPageChange({ page, pageSize }) {
      paging.value.page = page
      paging.value.pageSize = pageSize
    }

    return () => (
      <Table
        data={tableData.value}
        page={paging.value}
        columns={[
          { label: '姓名', key: 'name', render: () => (1) },
          { label: '姓名', key: 'name', render: () => (1) },
          { label: '姓名', key: 'name', render: () => (1) },
        ]}
        columnDefault={{ width: 100 }}
        onDataChange={onDataChange}
        onPageChange={onPageChange}
      />
    )
  }
})

/* eslint-enable */