<template>
  <div class="hello">
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <!-- Users component -->
        <b-col>
          <b-card-group deck>
            <b-card title="Users in Room" header-tag="header" footer-tag="footer">
              <b-badge pill variant="primary">500</b-badge>
              <h6 slot="header" class="mb-0">A Selected User</h6>
              <b-card-text>Scroll list of other users in the room</b-card-text>
              <em slot="footer">CTA Buttons</em>
            </b-card>
          </b-card-group>
        </b-col>

        <b-col cols="9">
          <b-card-group deck>
            <b-card title="Title" header-tag="header" footer-tag="footer">
              <h6 slot="header" class="mb-0">Name of Room or something</h6>
              <b-card-text>Toggle lyrics/Chat messages</b-card-text>
              <b-button id="weatherBtn" href="#" variant="primary">Current Weather</b-button>
              <em slot="footer">
                <b-input-group class="mt-3">
                  <b-form-input placeholder="Write your message"/>
                  <b-input-group-append>
                    <b-button variant="outline-success">Button</b-button>
                    <b-button variant="info">Button</b-button>
                  </b-input-group-append>
                </b-input-group>
              </em>
            </b-card>
          </b-card-group>
        </b-col>

      </b-row>

      <!-- Music Queue componenet -->
      <b-row>
        <b-col cols=3>
          <b-card-group deck>
            <b-card title="Songs" header-tag="header" footer-tag="footer">
              <h6 slot="header" class="mb-0">Music Queue</h6>
              <b-card-text>Scroll list of upcoming songs</b-card-text>
              <em slot="footer">CTA Buttons</em>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ChatRoom',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
