(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ve}));var a=n(49),r=n(8),o=n(11),l=n(36),c=n(28),i=n.n(c),u=n(151),s=n(118),d=n.n(s),f=n(127),m=(function(){var e=Object(l.default)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=JSON.stringify(n),e.next=4,f.default.setItem(t,a);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))}(),function(){var e=Object(l.default)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.default.getItem(t);case 3:return n=e.sent,e.abrupt("return",null!=n?JSON.parse(n):null);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),p=Object(u.createApi)({reducerPath:"Api",tagTypes:["login","logout","postTodo","deleteTodo","putTodo","postTask","putTask","deleteTask"],baseQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{baseUrl:""},t=e.baseUrl,n=e.withCredentials,a=e.headers;return function(){var e=Object(l.default)(i.a.mark((function e(r){var o,l,c,u,f,p,g,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.url,l=r.method,c=r.data,u=r.params,e.next=3,m("Cookie");case 3:return e.sent,e.prev=5,console.log(a),e.next=9,d()({url:t+o,method:l,data:c,params:u,headers:a,withCredentials:n});case 9:return f=e.sent,console.log(f),e.abrupt("return",{data:f.data});case 14:if(e.prev=14,e.t0=e.catch(5),!(e.t0 instanceof s.AxiosError)){e.next=22;break}return b=e.t0,console.log(b),e.abrupt("return",{error:{status:null==(p=b.response)?void 0:p.status,data:(null==(g=b.response)?void 0:g.data)||b.message}});case 22:throw e.t0;case 23:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}()}({baseUrl:"https://mini-trello-backend.herokuapp.com"}),endpoints:function(e){return{authMe:e.query({query:function(){return{url:"/auth/me",method:"get"}},providesTags:function(){return["login","logout"]}}),login:e.mutation({query:function(e){return{url:"/auth/login",method:"POST",data:e}},invalidatesTags:["login"]}),logout:e.mutation({query:function(e){return{url:"/auth/login",method:"DELETE",body:e}},invalidatesTags:["logout"]}),getTodoList:e.query({query:function(){return{url:"/todo-lists",method:"get"}},providesTags:function(){return["postTodo","putTodo","deleteTodo"]}}),postTodo:e.mutation({query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"New todo";return{url:"/todo-lists",method:"post",data:{title:e}}},invalidatesTags:["postTodo"]}),putTodo:e.mutation({query:function(e){return{url:"/todo-lists/"+e.todoId,method:"put",data:{title:e.title}}},invalidatesTags:["putTodo"]}),deleteTodo:e.mutation({query:function(e){return{url:"/todo-lists/"+e,method:"delete"}},invalidatesTags:["deleteTodo"]}),getTasks:e.query({query:function(e){var t=e.todolistId,n=e.page,a=void 0===n?1:n,r=e.count;return{url:"/todo-lists/"+t+"/tasks",method:"get",params:{count:void 0===r?100:r,page:a}}},providesTags:function(){return["postTask","putTask","deleteTask"]}}),postTask:e.mutation({query:function(e){return{url:"/todo-lists/"+e.todolistId+"/tasks",method:"post",data:{title:e.title}}},invalidatesTags:["postTask"]}),putTask:e.mutation({query:function(e){return{url:"/todo-lists/"+e.todoListId+"/tasks/"+e._id,method:"put",data:e}},invalidatesTags:["putTask"]}),deleteTask:e.mutation({query:function(e){return{url:"/todo-lists/"+e.todolistId+"/tasks/"+e.taskId,method:"delete"}},invalidatesTags:["deleteTask"]})}}}),g=Object(o.createSlice)({name:"navigateParamsSlice",initialState:{currentTodo:{},currentTask:{}},reducers:{changeCurrentTodo:function(e,t){e.currentTodo=t.payload},changeCurrentTask:function(e,t){e.currentTask=t.payload}}}),b=Object(o.configureStore)({reducer:Object(r.default)({navigateParamsState:g.reducer},p.reducerPath,p.reducer),middleware:function(e){return e().concat(p.middleware)}}),h=n(0),y=n.n(h),T=n(276),E=n(9),v=n(4),k=n(29),O=n(152),j=n(41).default.get("screen"),C=j.height,w=j.width,S=(y.a.createElement,Object(h.memo)((function(e){var t=e.children,n=e.onPress,a=e.title,r=void 0===a?"Button":a,o=(e.styleButton,e.styleTitle,e.activeOpacity),l=e.underlayColor,c=e.disabled,i=Object(h.useCallback)((function(e){n&&n(e)}),[n]);return y.a.createElement(O.default,{onPress:i,disabled:c,activeOpacity:o||.2,style:x.button,underlayColor:l||"rgb(60,134,168)"},y.a.createElement(k.default,{style:x.title},t||r))}))),x=v.default.create({button:{minWidth:(w-60)/7,flexWrap:"nowrap",paddingHorizontal:5,justifyContent:"center",alignItems:"center"},title:{color:"rgba(5,5,5)",fontSize:22}}),P=n(3),I=n(69),H=n(195),L=n(167),z=n(171),D=Object(L.default)(z.default).withConfig({displayName:"StyledInput",componentId:"sc-zzp8cl-0"})(["padding:0 10px 0 10px;font-size:","px;color:",";border-style:solid;border-color:",";border-radius:10px;border-width:1px;"],22,"#050505","#050505"),q=n(26),B=n(38);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var _=a.useDispatch,M=a.useSelector,A=function(){return Object(q.useNavigation)()},N=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Object(r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},g.actions),F=function(){var e=_();return Object(B.bindActionCreators)(N,e)},Q=(y.a.createElement,function(){var e=p.useAuthMeQuery(),t=e.data,n=e.isLoading,a=e.error,r=e.isError,o=a,c=p.useLoginMutation(),u=Object(E.default)(c,1)[0],s=A();Object(h.useEffect)((function(){t&&0===t.resultCode&&s.navigate("TodoScreen",{screen:"TodoList"})}),[t]);var d=function(){var e=Object(l.default)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return n?y.a.createElement(P.default,{style:J.loginContainer},y.a.createElement(I.default,{size:"large",color:"rgb(255,255,255)"})):r?y.a.createElement(P.default,{style:J.loginContainer},a?y.a.createElement(k.default,null,o.data):y.a.createElement(k.default,null,"error")):y.a.createElement(P.default,{style:J.loginContainer},y.a.createElement(H.Formik,{initialValues:{email:"",password:""},onSubmit:d},(function(e){var t=e.handleChange,n=e.handleBlur,a=e.handleSubmit,r=e.values;return y.a.createElement(P.default,{style:J.loginForm},y.a.createElement(D,{onChangeText:t("email"),onBlur:n("email"),value:r.email}),y.a.createElement(D,{style:J.loginTextField,onChangeText:t("password"),onBlur:n("password"),value:r.password}),y.a.createElement(S,{onPress:a,title:"Submit"}))})))}),J=v.default.create({loginContainer:{flex:1,justifyContent:"center",alignItems:"center"},loginForm:{width:w-60,paddingHorizontal:30,paddingVertical:30,backgroundColor:"rgba(5,5,5,0.5)"},loginTextField:{marginVertical:10}}),U=n(35),W=(y.a.createElement,function(){var e=M((function(e){return e.navigateParamsState.currentTask}));return y.a.createElement(P.default,{style:G.container},y.a.createElement(k.default,{style:G.title},e.title),y.a.createElement(P.default,{style:G.taskBar},y.a.createElement(S,null,"check"),y.a.createElement(S,null,"delete"),y.a.createElement(S,null,"edit")))}),G=v.default.create({checkedTask:{backgroundColor:"rgb(60,134,168)"},container:{paddingTop:U.default.currentHeight||0,paddingHorizontal:7.5,flex:1,justifyContent:"space-between"},title:{color:"#050505",fontSize:22},taskBar:{flexDirection:"row",justifyContent:"space-around"}}),K=(y.a.createElement,Object(h.memo)((function(e){var t=e.children,n=e.addTaskHandler,a=e.todo,r=e.viewMod,o=e.onChangeTaskTitle,l=e.currentTaskTitle,c=e.deleteTodoHandler,i=Object(h.useCallback)((function(){n&&n()}),[l]),u=Object(h.useCallback)((function(){c&&c(a._id)}),[a._id,c]);return y.a.createElement(P.default,{style:R.container},y.a.createElement(P.default,{style:R.titleContainer},y.a.createElement(k.default,{style:R.title},a.title),y.a.createElement(S,{onPress:u},"delete")),!r&&y.a.createElement(P.default,{style:R.inputAndButtonBox},y.a.createElement(D,{style:R.input,onChangeText:o,value:l,placeholderTextColor:"#050505",placeholder:"task name...",caretHidden:!0}),y.a.createElement(S,{onPress:i},"add task")),t||null)}))),R=v.default.create({container:{paddingTop:U.default.currentHeight||0,flex:1,justifyContent:"flex-start",paddingHorizontal:10,paddingVertical:10},titleContainer:{flexDirection:"row",justifyContent:"space-between"},title:{fontSize:22,color:"#050505",alignSelf:"center"},inputAndButtonBox:{flexDirection:"row",justifyContent:"space-between",marginVertical:10},input:{width:.6*(w-60)}}),X=n(110);y.a.createElement;function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){Object(r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=Object(h.memo)((function(e){var t=e.task,n=e.todo,a=p.usePutTaskMutation(),r=Object(E.default)(a,2),o=r[0],l=r[1].isLoading,c=A(),i=F(),u=i.changeCurrentTodo,s=i.changeCurrentTask,d=Object(h.useCallback)((function(){var e=0;return function(){e++,setTimeout((function(){e=0}),300),2===e&&(u(n),s(t),c.navigate("TodoScreen",{screen:"TaskScreen",params:{screen:"TaskView"}}))}}),[n,t]),f=Object(h.useCallback)((function(){o(Z(Z({},t),{},{status:0===t.status?1:0}))}),[t]);return y.a.createElement(X.default,{onPress:d()},y.a.createElement(P.default,{style:ee.taskContainer},y.a.createElement(k.default,{style:ee.title},t.title),y.a.createElement(S,{styleButton:ee.button,disabled:l,onPress:f},"check")))})),ee=v.default.create({taskContainer:{flexDirection:"row",justifyContent:"space-between",marginVertical:10,paddingVertical:7.5,paddingHorizontal:7.5},checkedTask:{backgroundColor:"rgb(60,134,168)"},title:{color:"#050505",fontSize:22,maxWidth:(w-60)/1.5},button:{maxHeight:C/25}}),te=n(73),ne=(y.a.createElement,Object(h.memo)((function(e){var t=e.tasks,n=e.todo;return y.a.createElement(P.default,null,y.a.createElement(te.default,{data:t,extraData:t,keyExtractor:function(e){return e._id},renderItem:function(e){var t=e.item;return y.a.createElement($,{todo:n,key:t._id,task:t})},listKey:n._id}))}))),ae=(y.a.createElement,Object(h.memo)((function(e){var t=e.todo,n=Object(h.useState)(""),a=n[0],r=n[1],o=p.useGetTasksQuery({todolistId:t._id}),l=o.data,c=o.isLoading,i=p.useDeleteTodoMutation(),u=Object(E.default)(i,1)[0],s=p.usePostTaskMutation(),d=Object(E.default)(s,1)[0],f=null==l?void 0:l.items,m=Object(h.useCallback)((function(e){r(e)}),[a]),g=Object(h.useCallback)((function(){d({todolistId:t._id,title:a}),r("")}),[t._id,a]),b=Object(h.useCallback)((function(e){u(e)}),[t._id]);return y.a.createElement(K,{currentTaskTitle:a,onChangeTaskTitle:m,todo:t,addTaskHandler:g,deleteTodoHandler:b},c?y.a.createElement(I.default,{color:"white",size:"large"}):y.a.createElement(ne,{todo:t,tasks:f}))}))),re=(y.a.createElement,function(){var e=M((function(e){return e.navigateParamsState.currentTodo}));return y.a.createElement(ae,{todo:e})}),oe=n(267),le=(y.a.createElement,Object(oe.default)()),ce=function(){return y.a.createElement(le.Navigator,{sceneContainerStyle:{backgroundColor:"rgb(100,101,101)"},screenOptions:{headerShown:!1}},y.a.createElement(le.Screen,{name:"TaskList",component:re}),y.a.createElement(le.Screen,{name:"TaskView",component:W}))},ie=n(185),ue=(y.a.createElement,Object(h.memo)((function(e){var t=e.createTodoHandler,n=Object(h.useState)(""),a=n[0],r=n[1],o=A(),l=p.useAuthMeQuery().data,c=Object(h.useCallback)((function(e){r(e)}),[a]),i=Object(h.useCallback)((function(){t(a),r("")}),[a]);return Object(h.useEffect)((function(){l&&1===l.resultCode&&o.navigate("Login")}),[l]),y.a.createElement(P.default,{style:se.container},y.a.createElement(D,{style:se.modalInputStyle,onChangeText:c,value:a,placeholderTextColor:"#050505",placeholder:"Todo..."}),y.a.createElement(S,{styleButton:se.button,onPress:i},"Create todo"))}))),se=v.default.create({container:{paddingTop:U.default.currentHeight||0,width:w,height:C/9,paddingHorizontal:15,paddingVertical:5,backgroundColor:"rgb(60,134,168)",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},button:{height:(C-60)/19,width:(w-60)/2},modalInputStyle:{height:(C-60)/19,width:(w-60)/2,borderStyle:"solid",borderColor:"rgba(5,5,5)"}}),de=(y.a.createElement,function(){return y.a.createElement(P.default,{style:fe.container},y.a.createElement(k.default,{style:fe.title},"O curva! list is empty!"))}),fe=v.default.create({container:{width:w,height:.79*C,justifyContent:"center",alignItems:"center"},title:{color:"#050505",fontSize:22}}),me=(y.a.createElement,Object(h.memo)((function(e){var t=e.children;return y.a.createElement(P.default,{style:pe.todoContainer},t)}))),pe=v.default.create({todoContainer:{width:w,minHeight:(C-60)/4,marginVertical:15,alignSelf:"center"}}),ge=(y.a.createElement,function(){var e=p.useGetTodoListQuery(),t=e.data,n=e.isLoading,a=e.isError,r=(e.error,p.usePostTodoMutation()),o=Object(E.default)(r,1)[0],l=A(),c=F().changeCurrentTodo,i=Object(h.useCallback)((function(e){o(e)}),[]);return n?y.a.createElement(I.default,null):a?y.a.createElement(k.default,null,"error"):y.a.createElement(te.default,{data:t,showsHorizontalScrollIndicator:!1,keyExtractor:function(e){return e._id},renderItem:function(e){var t=e.item;return console.log(t),y.a.createElement(ie.default,{activeOpacity:1,onLongPress:function(){c(t),l.navigate("TodoScreen",{screen:"TaskScreen",params:{screen:"TaskList"}})}},y.a.createElement(me,null,y.a.createElement(ae,{todo:t})))},ListHeaderComponent:y.a.createElement(ue,{createTodoHandler:i}),ListEmptyComponent:y.a.createElement(de,null),listKey:"root"})}),be=(y.a.createElement,Object(oe.default)()),he=function(){return y.a.createElement(be.Navigator,{screenOptions:{headerShown:!1}},y.a.createElement(be.Screen,{name:"TodoList",component:ge}),y.a.createElement(be.Screen,{name:"TaskScreen",component:ce}))},ye=(y.a.createElement,Object(oe.default)()),Te=function(){return y.a.createElement(ye.Navigator,{screenOptions:{headerShown:!1}},y.a.createElement(ye.Screen,{name:"TodoScreen",component:he}),y.a.createElement(ye.Screen,{name:"Login",component:Q}))},Ee=n(197);y.a.createElement;function ve(){return y.a.createElement(T.default,null,y.a.createElement(Ee.StatusBar,null),y.a.createElement(a.Provider,{store:b},y.a.createElement(Te,null)))}},202:function(e,t,n){e.exports=n(263)}},[[202,1,2]]]);
//# sourceMappingURL=app.7ccad78a.chunk.js.map