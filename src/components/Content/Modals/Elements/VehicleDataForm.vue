<template>
  <div :class="$style.formSectionWrap">
    <section>
      <p>Specs</p>
      <div>
        <label :for="domIds.manufacturer">Car manufacturer</label>
        <input
          type="text"
          :id="domIds.manufacturer"
          placeholder="Ford"
          :value="modelValue.manufacturer"
          @input="update('manufacturer', $event)"
        >
      </div>

      <div>
        <label :for="domIds.model">Car model</label>
        <input
          type="text"
          :id="domIds.model"
          placeholder="Focus"
          :value="modelValue.model"
          @input="update('model', $event)"
        >
      </div>

      <div>
        <label :for="domIds.fuel_type">Fuel type</label>
        <input
          type="text"
          :id="domIds.fuel_type"
          placeholder="gasoline"
          :value="modelValue.fuel_type"
          @input="update('fuel_type', $event)"
        >
      </div>

      <div>
        <label :for="domIds.engine_displacement">Engine displacement</label>
        <input
          type="text"
          :id="domIds.engine_displacement"
          placeholder="2"
          :value="modelValue.engine_displacement"
          @input="update('engine_displacement', $event)"
        >
      </div>

      <div>
        <label :for="domIds.transmission_type">Transmission type</label>
        <select
          :id="domIds.transmission_type"
          :value="modelValue.transmission_type"
          @input="update('transmission_type', $event)"
        >
          <option value="">Select transmission</option>
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
          <option value="robot">Robot</option>
          <option value="continuously variable">Continuously variable</option>
        </select>
      </div>

    </section>

    <section>
      <p>Legal info</p>
      <div>
        <label :for="domIds.model_year">Vehicle model year</label>
        <input
          type="text"
          :id="domIds.model_year"
          placeholder="2017"
          :value="modelValue.model_year"
          @input="update('model_year', $event)"
        >
      </div>

      <div>
        <label :for="domIds.vin">VIN</label>
        <input
          type="text"
          :id="domIds.vin"
          placeholder="1FADP3F29HL317914"
          :value="modelValue.vin"
          @input="update('vin', $event)"
        >
      </div>

      <div>
        <label :for="domIds.country_code">Vehicle country code</label>
        <input
          type="text"
          :id="domIds.country_code"
          placeholder="UA"
          :value="modelValue.country_code"
          @input="update('country_code', $event)"
          @focus="selectField($event)"
        >
      </div>

      <div>
        <label :for="domIds.registration_plate">Vehicle registration plate</label>
        <input
          type="text"
          :id="domIds.registration_plate"
          placeholder="AE9865PK"
          :value="modelValue.registration_plate"
          @input="update('registration_plate', $event)"
        >
      </div>

      <div>
        <label :for="domIds.color">Color</label>
        <input
          type="text"
          :id="domIds.color"
          placeholder="Darkgrey"
          :value="modelValue.color"
          @input="update('color', $event)"
        >
      </div>

      <div>
        <label :for="domIds.image_link">Image link</label>
        <input
          type="text"
          :id="domIds.image_link"
          placeholder="https://cdn4.riastatic.com/photosnew/auto/photo/ford_focus__338174179f.jpg"
          :value="modelValue.image_link"
          @input="update('image_link', $event)"
          @focus="selectField($event)"
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'VehicleDataForm',
  props: {
    modelValue: Object,
    idPrefix: {
      type: String,
      default: Date.now().toString()
    },
  },
  methods: {
    update(key, event) {
      this.$emit('update:modelValue', {
        ...this.modelValue,
        [key]: event.target.value
      });
    },
    selectField(e) {
      e.target.select();
    }
  },
  computed: {
    domIds() {
      const keys = Object.keys(this.modelValue);
      return keys.reduce((a, c) => ({
        ...a,
        [c]: `${this.idPrefix}-${c}`
      }), {});
    }
  }
};
</script>

<style module>
.formSectionWrap {
  display: flex;
  align-items: flex-start;
  padding: 1em 0 2em;
}

.formSectionWrap section {
  padding: 0.4em 2em;
}

.formSectionWrap p {
  margin: 0 0 1em 0;
}

.formSectionWrap section div {
  display: flex;
  flex-direction: column;
  padding: 0.3em 0;
}

.formSectionWrap label {
  font-weight: 300;
}

.formSectionWrap select {
  font-size: 0.9em;
  padding: 0.4em;
  border: 2px solid;
}

.formSectionWrap select option {
  background: #d7ff92;
}

</style>
