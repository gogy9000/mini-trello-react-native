(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Te}));var a=n(49),r=n(8),o=n(11),l=n(36),c=n(28),i=n.n(c),u=n(151),s=n(118),d=n.n(s),f=n(127),m=(function(){var e=Object(l.default)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=JSON.stringify(n),e.next=4,f.default.setItem(t,a);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))}(),function(){var e=Object(l.default)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.default.getItem(t);case 3:return n=e.sent,e.abrupt("return",null!=n?JSON.parse(n):null);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),p=Object(u.createApi)({reducerPath:"Api",tagTypes:["login","logout","postTodo","deleteTodo","putTodo","postTask","putTask","deleteTask"],baseQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{baseUrl:""},t=e.baseUrl,n=e.withCredentials,a=e.headers;return function(){var e=Object(l.default)(i.a.mark((function e(r){var o,l,c,u,f,p,g,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.url,l=r.method,c=r.data,u=r.params,e.next=3,m("Cookie");case 3:return e.sent,e.prev=5,console.log(a),e.next=9,d()({url:t+o,method:l,data:c,params:u,headers:a,withCredentials:n});case 9:return f=e.sent,console.log(f),e.abrupt("return",{data:f.data});case 14:if(e.prev=14,e.t0=e.catch(5),!(e.t0 instanceof s.AxiosError)){e.next=22;break}return b=e.t0,console.log(b),e.abrupt("return",{error:{status:null==(p=b.response)?void 0:p.status,data:(null==(g=b.response)?void 0:g.data)||b.message}});case 22:throw e.t0;case 23:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}()}({baseUrl:"https://mini-trello-backend.herokuapp.com"}),endpoints:function(e){return{authMe:e.query({query:function(){return{url:"/auth/me",method:"get"}},providesTags:function(){return["login","logout"]}}),login:e.mutation({query:function(e){return{url:"/auth/login",method:"POST",data:e}},invalidatesTags:["login"]}),logout:e.mutation({query:function(e){return{url:"/auth/login",method:"DELETE",body:e}},invalidatesTags:["logout"]}),getTodoList:e.query({query:function(){return{url:"/todo-lists",method:"get"}},providesTags:function(){return["postTodo","putTodo","deleteTodo"]}}),postTodo:e.mutation({query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"New todo";return{url:"/todo-lists",method:"post",data:{title:e}}},invalidatesTags:["postTodo"]}),putTodo:e.mutation({query:function(e){return{url:"/todo-lists/"+e.todoId,method:"put",data:{title:e.title}}},invalidatesTags:["putTodo"]}),deleteTodo:e.mutation({query:function(e){return{url:"/todo-lists/"+e,method:"delete"}},invalidatesTags:["deleteTodo"]}),getTasks:e.query({query:function(e){var t=e.todolistId,n=e.page,a=void 0===n?1:n,r=e.count;return{url:"/todo-lists/"+t+"/tasks",method:"get",params:{count:void 0===r?100:r,page:a}}},providesTags:function(){return["postTask","putTask","deleteTask"]}}),postTask:e.mutation({query:function(e){return{url:"/todo-lists/"+e.todolistId+"/tasks",method:"post",data:{title:e.title}}},invalidatesTags:["postTask"]}),putTask:e.mutation({query:function(e){return{url:"/todo-lists/"+e.todoListId+"/tasks/"+e._id,method:"put",data:e}},invalidatesTags:["putTask"]}),deleteTask:e.mutation({query:function(e){return{url:"/todo-lists/"+e.todolistId+"/tasks/"+e.taskId,method:"delete"}},invalidatesTags:["deleteTask"]})}}}),g=Object(o.createSlice)({name:"navigateParamsSlice",initialState:{currentTodo:{},currentTask:{}},reducers:{changeCurrentTodo:function(e,t){e.currentTodo=t.payload},changeCurrentTask:function(e,t){e.currentTask=t.payload}}}),b=Object(o.configureStore)({reducer:Object(r.default)({navigateParamsState:g.reducer},p.reducerPath,p.reducer),middleware:function(e){return e().concat(p.middleware)}}),h=n(0),y=n.n(h),T=n(276),E=n(9),k=n(4),v=n(31),O=n(164),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return{borderStyle:"solid",borderColor:"#DDDDDD",borderRadius:e,borderWidth:1}},j=(k.default.create({modalInputStyle:{height:440/19,width:220,paddingHorizontal:10,fontSize:22,color:"#DDDDDD"}}),y.a.createElement,Object(h.memo)((function(e){var t=e.children,n=e.onPress,a=e.title,r=void 0===a?"Button":a,o=e.styleButton,l=e.styleTitle,c=e.activeOpacity,i=e.underlayColor,u=e.disabled,s=Object(h.useCallback)((function(e){n&&n(e)}),[n]);return y.a.createElement(O.default,{onPress:s,disabled:u,activeOpacity:c||.2,style:[C.button,D(),o],underlayColor:i||"rgba(5,5,5,0.2)"},y.a.createElement(v.default,{style:[C.title,l]},t||r))}))),C=k.default.create({button:{minWidth:440/7,flexWrap:"nowrap",paddingHorizontal:5,justifyContent:"center",alignItems:"center"},title:{color:"#DDDDDD",fontSize:22}}),w=n(3),S=n(69),x=n(195),P=n(167),I=n(171),H=Object(P.default)(I.default).withConfig({displayName:"StyledInput",componentId:"sc-zzp8cl-0"})(["padding:0 10px 0 10px;font-size:","px;color:",";border-style:solid;border-color:",";border-radius:10px;border-width:1px;"],22,"#DDDDDD","#DDDDDD"),z=n(26),L=n(38);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var q=a.useDispatch,V=a.useSelector,_=function(){return Object(z.useNavigation)()},M=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){Object(r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},g.actions),A=function(){var e=q();return Object(L.bindActionCreators)(M,e)},F=(y.a.createElement,function(){var e=p.useAuthMeQuery(),t=e.data,n=e.isLoading,a=e.error,r=e.isError,o=a,c=p.useLoginMutation(),u=Object(E.default)(c,1)[0],s=_();Object(h.useEffect)((function(){t&&0===t.resultCode&&s.navigate("TodoScreen",{screen:"TodoList"})}),[t]);var d=function(){var e=Object(l.default)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return n?y.a.createElement(w.default,{style:[N.loginContainer]},y.a.createElement(S.default,{size:"large",color:"rgb(255,255,255)"})):r?y.a.createElement(w.default,{style:[N.loginContainer]},a?y.a.createElement(v.default,null,o.data):y.a.createElement(v.default,null,"error")):y.a.createElement(w.default,{style:[N.loginContainer]},y.a.createElement(x.Formik,{initialValues:{email:"",password:""},onSubmit:d},(function(e){var t=e.handleChange,n=e.handleBlur,a=e.handleSubmit,r=e.values;return y.a.createElement(w.default,{style:[N.loginForm,D()]},y.a.createElement(H,{onChangeText:t("email"),onBlur:n("email"),value:r.email}),y.a.createElement(H,{style:[N.loginTextField],onChangeText:t("password"),onBlur:n("password"),value:r.password}),y.a.createElement(j,{onPress:a,title:"Submit"}))})))}),N=k.default.create({loginContainer:{flex:1,justifyContent:"center",alignItems:"center"},loginForm:{width:440,paddingHorizontal:30,paddingVertical:30,backgroundColor:"rgba(5,5,5,0.5)"},loginTextField:{marginVertical:10}}),Q=n(35),J=(y.a.createElement,function(){var e=V((function(e){return e.navigateParamsState.currentTask}));return y.a.createElement(w.default,{style:[W.container]},y.a.createElement(v.default,{style:[W.title]},e.title),y.a.createElement(w.default,{style:[W.taskBar]},y.a.createElement(j,null,"check"),y.a.createElement(j,null,"delete"),y.a.createElement(j,null,"edit")))}),W=k.default.create({checkedTask:{backgroundColor:"rgba(5,5,5,0.2)"},container:{paddingTop:Q.default.currentHeight||0,paddingHorizontal:7.5,flex:1,justifyContent:"space-between"},title:{color:"#DDDDDD",fontSize:22},taskBar:{flexDirection:"row",justifyContent:"space-around"}}),U=(y.a.createElement,Object(h.memo)((function(e){var t=e.children,n=e.addTaskHandler,a=e.todo,r=e.viewMod,o=e.onChangeTaskTitle,l=e.currentTaskTitle,c=e.deleteTodoHandler,i=Object(h.useCallback)((function(){n&&n()}),[l]),u=Object(h.useCallback)((function(){c&&c(a._id)}),[a._id,c]);return y.a.createElement(w.default,{style:G.container},y.a.createElement(w.default,{style:[G.titleContainer]},y.a.createElement(v.default,{style:G.title},a.title),y.a.createElement(j,{onPress:u},"delete")),!r&&y.a.createElement(w.default,{style:[G.inputAndButtonBox]},y.a.createElement(H,{style:[G.input],onChangeText:o,value:l,placeholderTextColor:"#DDDDDD",placeholder:"task name...",caretHidden:!0}),y.a.createElement(j,{onPress:i},"add task")),t||null)}))),G=k.default.create({container:{paddingTop:Q.default.currentHeight||0,flex:1,justifyContent:"flex-start",paddingHorizontal:10,paddingVertical:10},titleContainer:{flexDirection:"row",justifyContent:"space-between"},title:{fontSize:22,color:"#DDDDDD",alignSelf:"center"},inputAndButtonBox:{flexDirection:"row",justifyContent:"space-between",marginVertical:10},input:{width:264}}),K=n(110);y.a.createElement;function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){Object(r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=Object(h.memo)((function(e){var t=e.task,n=e.todo,a=p.usePutTaskMutation(),r=Object(E.default)(a,2),o=r[0],l=r[1].isLoading,c=_(),i=A(),u=i.changeCurrentTodo,s=i.changeCurrentTask,d=Object(h.useCallback)((function(){var e=0;return function(){e++,setTimeout((function(){e=0}),300),2===e&&(u(n),s(t),c.navigate("TodoScreen",{screen:"TaskScreen",params:{screen:"TaskView"}}))}}),[n,t]),f=Object(h.useCallback)((function(){o(X(X({},t),{},{status:0===t.status?1:0}))}),[t]);return y.a.createElement(K.default,{onPress:d()},y.a.createElement(w.default,{style:[Z.taskContainer,D(),1===t.status&&Z.checkedTask]},y.a.createElement(v.default,{style:[Z.title]},t.title),y.a.createElement(j,{styleButton:Z.button,disabled:l,onPress:f},"check")))})),Z=k.default.create({taskContainer:{flexDirection:"row",justifyContent:"space-between",marginVertical:10,paddingVertical:7.5,paddingHorizontal:7.5},checkedTask:{backgroundColor:"rgba(5,5,5,0.2)"},title:{color:"#DDDDDD",fontSize:22,maxWidth:440/1.5},button:{maxHeight:20}}),$=n(73),ee=(y.a.createElement,Object(h.memo)((function(e){var t=e.tasks,n=e.todo;return y.a.createElement(w.default,null,y.a.createElement($.default,{data:t,extraData:t,keyExtractor:function(e){return e._id},renderItem:function(e){var t=e.item;return y.a.createElement(Y,{todo:n,key:t._id,task:t})},listKey:n._id}))}))),te=(y.a.createElement,Object(h.memo)((function(e){var t=e.todo,n=Object(h.useState)(""),a=n[0],r=n[1],o=p.useGetTasksQuery({todolistId:t._id}),l=o.data,c=o.isLoading,i=p.useDeleteTodoMutation(),u=Object(E.default)(i,1)[0],s=p.usePostTaskMutation(),d=Object(E.default)(s,1)[0],f=null==l?void 0:l.items,m=Object(h.useCallback)((function(e){r(e)}),[a]),g=Object(h.useCallback)((function(){d({todolistId:t._id,title:a}),r("")}),[t._id,a]),b=Object(h.useCallback)((function(e){u(e)}),[t._id]);return y.a.createElement(U,{currentTaskTitle:a,onChangeTaskTitle:m,todo:t,addTaskHandler:g,deleteTodoHandler:b},c?y.a.createElement(S.default,{color:"white",size:"large"}):y.a.createElement(ee,{todo:t,tasks:f}))}))),ne=(y.a.createElement,function(){var e=V((function(e){return e.navigateParamsState.currentTodo}));return y.a.createElement(te,{todo:e})}),ae=n(267),re=(y.a.createElement,Object(ae.default)()),oe=function(){return y.a.createElement(re.Navigator,{tabBar:function(){return y.a.createElement(y.a.Fragment,null)},sceneContainerStyle:{backgroundColor:"rgba(5,5,5,0)"},screenOptions:{headerShown:!1}},y.a.createElement(re.Screen,{name:"TaskList",component:ne}),y.a.createElement(re.Screen,{name:"TaskView",component:J}))},le=n(185),ce=(y.a.createElement,Object(h.memo)((function(e){var t=e.createTodoHandler,n=Object(h.useState)(""),a=n[0],r=n[1],o=_(),l=p.useAuthMeQuery().data,c=Object(h.useCallback)((function(e){r(e)}),[a]),i=Object(h.useCallback)((function(){t(a),r("")}),[a]);return Object(h.useEffect)((function(){l&&1===l.resultCode&&o.navigate("Login")}),[l]),y.a.createElement(w.default,{style:ie.container},y.a.createElement(H,{style:[ie.modalInputStyle],onChangeText:c,value:a,placeholderTextColor:"#DDDDDD",placeholder:"Todo..."}),y.a.createElement(j,{styleButton:ie.button,onPress:i},"Create todo"))}))),ie=k.default.create({container:{paddingTop:Q.default.currentHeight||0,width:500,height:500/9,paddingHorizontal:15,paddingVertical:5,backgroundColor:"rgba(5,5,5,0.2)",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},button:{height:440/19,width:220},modalInputStyle:{height:440/19,width:220}}),ue=(y.a.createElement,function(){return y.a.createElement(w.default,{style:se.container},y.a.createElement(v.default,{style:se.title},"O curva! list is empty!"))}),se=k.default.create({container:{width:500,height:395,justifyContent:"center",alignItems:"center"},title:{color:"#DDDDDD",fontSize:22}}),de=(y.a.createElement,Object(h.memo)((function(e){var t=e.children;return y.a.createElement(w.default,{style:[fe.todoContainer,D(0)]},t)}))),fe=k.default.create({todoContainer:{width:500,minHeight:110,marginVertical:15,alignSelf:"center"}}),me=(y.a.createElement,function(){var e=p.useGetTodoListQuery(),t=e.data,n=e.isLoading,a=p.usePostTodoMutation(),r=Object(E.default)(a,1)[0],o=_(),l=A().changeCurrentTodo,c=Object(h.useCallback)((function(e){r(e)}),[]),i=Object(h.useCallback)((function(e){var t=e.item;return y.a.createElement(le.default,{activeOpacity:1,onLongPress:function(){l(t),o.navigate("TodoScreen",{screen:"TaskScreen",params:{screen:"TaskList"}})}},y.a.createElement(de,null,y.a.createElement(te,{todo:t})))}),[t]);return n?y.a.createElement(S.default,null):y.a.createElement($.default,{data:t,keyExtractor:function(e){return e._id},renderItem:i,ListHeaderComponent:y.a.createElement(ce,{createTodoHandler:c}),ListEmptyComponent:y.a.createElement(ue,null),listKey:"root"})}),pe=(y.a.createElement,Object(ae.default)()),ge=function(){return y.a.createElement(pe.Navigator,{tabBar:function(){return y.a.createElement(y.a.Fragment,null)},sceneContainerStyle:{backgroundColor:"rgba(5,5,5,0)"},screenOptions:{headerShown:!1}},y.a.createElement(pe.Screen,{name:"TodoList",component:me}),y.a.createElement(pe.Screen,{name:"TaskScreen",component:oe}))},be=(y.a.createElement,Object(ae.default)()),he=function(){return y.a.createElement(be.Navigator,{tabBar:function(){return y.a.createElement(y.a.Fragment,null)},sceneContainerStyle:{backgroundColor:"rgba(5,5,5,1)"},screenOptions:{headerShown:!1}},y.a.createElement(be.Screen,{name:"TodoScreen",component:ge}),y.a.createElement(be.Screen,{name:"Login",component:F}))},ye=n(197);y.a.createElement;function Te(){return y.a.createElement(T.default,null,y.a.createElement(ye.StatusBar,{style:"auto"}),y.a.createElement(a.Provider,{store:b},y.a.createElement(he,null)))}},202:function(e,t,n){e.exports=n(263)}},[[202,1,2]]]);
//# sourceMappingURL=app.cac501e5.chunk.js.map