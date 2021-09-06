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
        <label :for="domIds.fuelType">Fuel type</label>
        <select
          :id="domIds.fuelType"
          :value="modelValue.fuelType"
          @input="update('fuelType', $event)"
        >
          <option value="">Select fuel</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Diesel">Diesel</option>
        </select>
      </div>

      <div>
        <label :for="domIds.engineDisplacement">Engine displacement</label>
        <input
          type="text"
          :id="domIds.engineDisplacement"
          placeholder="2"
          :value="modelValue.engineDisplacement"
          @input="update('engineDisplacement', $event)"
        >
      </div>

      <div>
        <label :for="domIds.transmissionType">Transmission type</label>
        <select
          :id="domIds.transmissionType"
          :value="modelValue.transmissionType"
          @input="update('transmissionType', $event)"
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
        <label :for="domIds.modelYear">Vehicle model year</label>
        <input
          type="text"
          :id="domIds.modelYear"
          placeholder="2017"
          :value="modelValue.modelYear"
          @input="update('modelYear', $event)"
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
        <label :for="domIds.countryCode">Vehicle country code</label>
        <input
          type="text"
          :id="domIds.countryCode"
          placeholder="UA"
          :value="modelValue.countryCode"
          @input="update('countryCode', $event)"
          @focus="selectField($event)"
        >
      </div>

      <div>
        <label :for="domIds.registrationPlate">Vehicle registration plate</label>
        <input
          type="text"
          :id="domIds.registrationPlate"
          placeholder="AE9865PK"
          :value="modelValue.registrationPlate"
          @input="update('registrationPlate', $event)"
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
        <label :for="domIds.imageLink">Image link</label>
        <input
          type="text"
          :id="domIds.imageLink"
          placeholder="https://cdn4.riastatic.com/photosnew/auto/photo/ford_focus__338174179f.jpg"
          :value="modelValue.imageLink"
          @input="update('imageLink', $event)"
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
      default: Date.now().toString(),
    },
  },
  methods: {
    update(key, event) {
      this.$emit('update:modelValue', {
        ...this.modelValue,
        [key]: event.target.value,
      });
    },
    selectField(e) {
      e.target.select();
    },
  },
  computed: {
    domIds() {
      const keys = Object.keys(this.modelValue);
      return keys.reduce((a, c) => ({
        ...a,
        [c]: `${this.idPrefix}-${c}`,
      }), {});
    },
  },
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
