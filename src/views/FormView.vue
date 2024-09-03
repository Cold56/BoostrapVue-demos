<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset">
      <!-- 输入框 -->
      <b-form-input v-model="testInput" type="text" placeholder="Plz type here!" class="mb-2"></b-form-input>
      <!-- 复选框，并使用value指定选中和不选中的值 -->
      <b-form-checkbox v-model="checkbox1" value="accepted" unchecked-value="not_accepted">I accept the terms and
        use</b-form-checkbox>
      <b-button type="submit" class="mr-2" variant="success">Submit!</b-button>
      <b-button type="reset" class="mr-2" variant="outline-danger">Reset!</b-button>
    </b-form>
    <hr />
    <!-- 使用feedback来输出不同的提醒 -->
    <b-form-valid-feedback :state="checkbox1 === 'accepted'">This is what you have inputed:&emsp;{{ testInput
      }}</b-form-valid-feedback>
    <b-form-invalid-feedback :state="checkbox1 === 'accepted'">Plz accept the terms first</b-form-invalid-feedback>
    <hr />
    <!-- 使用:show来根据showAlert的值显示或隐藏b-alert -->
    <b-alert :show="showAlert" :variant="alertType">{{ afterSubmit }}</b-alert>
    <hr />


    <!-- 复选框组合，用来产生爱好列表（这里使用switches把勾选变成开关） -->
    <b-form-checkbox-group switches v-model="color">
      <b-form-fieldset>Pick the colors you prefer</b-form-fieldset>
      <b-form-checkbox style="background-color:green" value="green">Green</b-form-checkbox>
      <b-form-checkbox style="background-color:yellow" value="yellow">Yellow</b-form-checkbox>
      <b-form-checkbox style="background-color:red" value="red">Red</b-form-checkbox>
      <b-form-checkbox value="white">White</b-form-checkbox>
      <b-form-checkbox style="background-color:grey" value="grey">grey</b-form-checkbox>
    </b-form-checkbox-group>
    <!-- 通过对自己使用计算属性来实时更新自己和他人的值 -->
    <b-form-checkbox type="checkbox" v-model="checkAll">all</b-form-checkbox>
    <p v-if="color.length !== 0">{{ color }}</p>
    <hr />
    <!-- 使用数组来 创建并管理复选框组 -->
    <!-- stacked可以让内容不挤在一行，buttons把复选框变成按钮（被选中的颜色会加深），options后面接的是待使用的数组，value-field会提取数组中的item作为值，后面的field同理（显示文本、是否启用） -->
    <b-form-checkbox-group button-variant="success" buttons stacked :options="checkbox3Options" v-model="checkbox3"
      value-field="item" text-field="name" disabled-field="notEnabled">
    </b-form-checkbox-group>
    {{ checkbox3 }}
    <hr />


    <!-- 表单日期选定，当然可以和b-calendar一样添加readonly或者disabled、:min以及:max等等属性。这里我还使用date-format-options控制了年月显示方式 -->
    <b-form-datepicker v-model="datepicker1"
      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
    <hr />


    <!-- 文件管理，添加plain就会变成只能点击添加，添加mutiple允许多个文件，使用accept限制只能上传图像文件 -->
    <b-form-file v-model="file1" multiple accept="image/*" placeholder="Choose a image or drop it here"
      drop-placeholder="Drop here"></b-form-file>
    <div class="mt-3">
      Selected file:<span v-for="(val, index) in file1" :key="index">{{ val ? val.name : '' }}</span>
    </div>
    <hr />
    <!-- 更炫酷的表示方法 -->
    <b-form-file multiple>
      <!-- 插槽充当file-name（接收name），接收到的数据存入names数组 -->
      <template slot="file-name" slot-scope="{names}">
        <b-badge variant="dark">{{ names[0] }}</b-badge>
        <b-badge v-if="names.length > 1" variant="dark" class="ml-1"> + {{ names.length - 1 }}More files</b-badge>
      </template>
    </b-form-file>
    <hr />


    <!-- 使用feedback，同时需要对内部组件进行状态判定才可以让feedback生效 -->
    <b-form-group description="Input your name" label="Name" :valid-feedback="validFeedback"
      :invalid-feedback="invalidFeedback">
      <b-form-input v-model="name1" :state="name1.length > 4" trim></b-form-input>
    </b-form-group>
    <hr />


    <!-- 单选框radio -->
    <b-form-radio-group v-model="radioVal1">
      <b-form-radio value="A">A</b-form-radio>
      <b-form-radio value="B">B</b-form-radio>
      <b-form-radio value="C">C</b-form-radio>
      <b-form-radio :value="{ D: 'this is D' }">D</b-form-radio>
      <b-form-invalid-feedback :state="radioState">Plz select one</b-form-invalid-feedback>
      <b-form-valid-feedback :state="radioState">Thank u</b-form-valid-feedback>
    </b-form-radio-group>
    <p>{{ radioVal1 }}</p>
    <hr />


    <!-- 使用rating进行打分，使用stars来控制等级数量（默认为5），并设置数量显示（在右侧），再使用icon等设置来调整等级形状等等 -->
    <label>Plz rating for us</label>
    <b-form-rating v-model="ratingVal1" stars="10" color="green" show-value show-value-max icon-empty="heart"
      icon-half="heart-half" icon-full="heart-fill" icon-clear="slash-circle" show-clear>
    </b-form-rating>
    <hr />


    <!-- 选择select -->
    <label>Form select</label>
    <!-- value-field默认为value，text-field默认为text，disabled-field默认为disabled -->
    <b-form-select v-model="selectVal1" :options="selectOption"></b-form-select>
    <code>Value:{{ selectVal1 }}</code>
    <hr />


    <!-- 旋钮spinbutton，使用wrap让数字循环，inline让旋钮大小变小，还可以使用vertical让它立起来 -->
    <label>SpinButton</label><br>
    <b-form-spinbutton v-model="spinbuttonVal" min="0" max="10" wrap inline></b-form-spinbutton>
    <hr />
    <!-- 中文大小写数字转换 -->
    <p>您选择的数字为{{ smallNum }}</p>
    <b-form-spinbutton v-model="smallNum" :formatter-fn="TransformNum" wrap min="0" max="10"></b-form-spinbutton>
    <hr />


    <!-- 标签tags（输入后敲击回车，会生成标签），也可以使用separator来添加其他分离要素，或者使用no-add-on-enter来取消回车键入，remove-on-delete用来启用回退键删除 -->
    <label>标签tags</label>
    <b-form-tags placeholder="Input then enter to add tag" remove-on-delete size="lg">
    </b-form-tags>
    <hr />


    <!-- 大型输入框textarea，并设定初始输入行数为3（决定初始宽度），单页面最多显示行数为6 -->
    <label>大型输入框textarea</label>
    <!-- 使用相同的v-model可以实现输入信息同步 -->
    <b-form-textarea v-model="txaVal1" size="sm" rows="3" max-rows="6" :state="txaVal1.length > 0"></b-form-textarea>
    <b-form-textarea v-model="txaVal1" rows="3" max-rows="6"></b-form-textarea>
    <!-- 使用:formatter自动把输入的大写字母转换为小写 -->
    <b-form-textarea v-model="txaVal1" size="lg" rows="3" max-rows="6" :formatter="TransformToLow"></b-form-textarea>
    <hr />


    <!-- 时间选取器timepicker，now-button reset-button分别用于创建按钮来获取当前时间和重置所选时间 -->
    <label>时间选取器timepicker</label>
    <b-form-timepicker v-model="time1" locale="zh" now-button reset-button :state="time1 !== ''"></b-form-timepicker>
    <br>
    <!-- 创建一个自定义的（时间输入加时间选取） -->
    <label>Plz select or input time</label>
    <b-input-group class="mb-3">
      <!-- 插入前置文本，也可以用b-input-group-prepend -->
      <template v-slot:prepend>
        <b-input-group-text>
          Input time
        </b-input-group-text>
      </template>
      <b-form-input v-model="time2" placeholder="请输入时间，格式为hh:mm:ss" type="text"></b-form-input>
      <b-input-group-append>
        <!-- 使用v-bind时，调用的元素应该是动态的 -->
        <b-form-timepicker v-model="time2" right button-only show-seconds now-button reset-button :locale="locale"
          v-bind="labels[locale] || {}"></b-form-timepicker>
      </b-input-group-append>
    </b-input-group>
    <hr />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      testInput: '',
      afterSubmit: '',
      checkbox1: 'not_accepted',
      checkbox3: [],
      datepicker1: null,
      checkbox3Options: [{
        name: 'Field1',
        item: 'field1',
        notEnabled: false,
      }, {
        name: 'Field2',
        item: 'field2',
        notEnabled: false,
      }, {
        name: 'Field3',
        item: 'field3',
        notEnabled: true,
      }],
      showAlert: false, // 控制b-alert显示的属性
      alertType: 'success',
      color: [],// 如果是多选用这个，如果是单选用{}或者null
      file1: null,
      name1: '',
      radioVal1: null,
      ratingVal1: null,
      selectVal1: null,
      //下面我创建了选项组
      selectOption: [{
        label: 'GroupOptions1',
        options: [{
          value: null,
          text: 'Plz select one'
        }, {
          value: 'a',
          text: 'Option1'
        }, {
          value: 'b',
          text: 'Option2'
        }, {
          value: 'c',
          text: 'Option3',
          disabled: true
        }],
      }, {
        label: 'GroupOptions2',
        options: [{
          value: null,
          text: 'Plz select one'
        }, {
          value: 'A',
          text: 'Op1'
        }, {
          value: 'B',
          text: 'Op2'
        }, {
          value: 'C',
          text: 'Op3',
          disabled: true
        }]
      }],
      //利用v-model设置初始值
      spinbuttonVal: 5,
      smallNum: 0,
      txaVal1: '',//初始值设为null可能导致初始长度计算错误
      time1: '',
      time2: '',
      locale: 'zh',
      labels: {
        'zh': {
          labelHours: '时',
          labelMinutes: '分',
          labelSeconds: '秒',
          labelIncrement: '时增',
          labelDecrement: '时减',
          labelNoTimeSelected: '无时间',
          labelCloseButton: '关闭',
          labelNowButton: '当前时间',
          labelResetButton: '重置时间'
        }
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.testInput !== '') {
        this.afterSubmit = this.testInput; // 更新要显示的信息
        this.alertType = 'success'
      } else {
        this.afterSubmit = 'You have not input anything!';
        this.alertType = 'warning';
      }
      if (this.checkbox1 === 'accepted') {
        this.showAlert = true; // 显示b-alert
      }
    },
    onReset(evt) {
      evt.preventDefault();
      this.testInput = '';
      this.afterSubmit = '';
      this.showAlert = false; // 隐藏b-alert
    },
    TransformNum() {
      const bigNum = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾']
      return bigNum[this.smallNum]
    },
    //formatter过来的不要直接用this.txaVal1，而是用value
    TransformToLow(value) {
      return value.toLowerCase()
    }
  },
  computed: {//计算属性不需要初始值
    checkAll: {
      get() {
        return this.color.length === 5 && !this.color.includes('all')
      },
      set(value) {
        if (value) {
          this.color = ['green', 'yellow', 'red', 'white', 'grey'];
        } else if (!value) {
          this.color = [];
        }
      }
    },
    invalidFeedback() {
      if (this.name1.length <= 4) {
        return "Plz input your name"
      }
    },
    validFeedback() {
      if (this.name1.length > 4) {
        return "It is valid"
      }
    },
    radioState() {
      return Boolean(this.radioVal1)
    },
  }
}
</script>