/* eslint-disable */
// @ts-nocheck

const Form = defineComponent({
  setup() {
    const tableData = ref([])
    const paging = ref({
      page: 1,
      pageSize: 10, 
    })

    return () => (
      <Table
        columns={[
          ['姓名', 'name'],
          ['年龄', 'age'],
          ['性别', 'sex']
        ]}
        data={tableData.value}
        page={paging.value}
        onDataChange={(value) => set(tableState.value, 'data', value)}
        onPageChange={onPageChange}
      />
    )
  }
})

/* eslint-enable */