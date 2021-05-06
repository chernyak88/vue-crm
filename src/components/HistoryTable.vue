<template>
  <table>
    <thead>
    <tr>
      <th>#</th>
      <th>{{ 'Amount'| localize }}</th>
      <th>{{ 'Date'| localize }}</th>
      <th>{{ 'Category'| localize }}</th>
      <th>{{ 'Type'| localize }}</th>
      <th>{{ 'Open'| localize }}</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(record, idx) in records" :key="record.id">
      <td>{{ idx + 1 }}</td>
      <td>{{ record.amount | currency('RUB') }}</td>
      <td>{{ record.date | date('RUB') }}</td>
      <td>{{ record.categoryName }}</td>
      <td>
        <span
          class="white-text badge"
          :class="[record.typeClass]"
        >
          {{ record.typeText }}
        </span>
      </td>
      <td>
        <button
          v-tooltip="'OpenRecord'"
          class="btn-small btn"
          @click="$router.push('/detail/' + record.id)"
        >
          <i class="material-icons">open_in_new</i>
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    records: {
      type: Array,
      required: true
    }
  }
}
</script>