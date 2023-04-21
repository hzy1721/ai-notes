(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{7304:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pytorch/dataset",function(){return t(4457)}])},979:function(e,s,t){"use strict";var n=t(5893);s.Z={logo:(0,n.jsx)("span",{children:"AI Notes"}),project:{link:"https://github.com/hzy1721/ai-notes"},footer:{component:null},editLink:{text:null},feedback:{content:null},useNextSeoProps:()=>({titleTemplate:"%s – AI Notes"})}},4457:function(e,s,t){"use strict";t.r(s);var n=t(5893),r=t(4319),i=t(2840),o=t(979);t(9966);var l=t(1151);function a(e){let s=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",pre:"pre",span:"span"},(0,l.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"数据集"}),"\n",(0,n.jsxs)(s.p,{children:["继承 ",(0,n.jsx)(s.code,{children:"torch.utils.data.Dataset"}),"，实现 3 个方法："]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"__init__"}),"：构造函数，读取数据文件，存储到变量中"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"__len__"}),"：返回样本总数"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"__getitem__"}),"：返回下标为 ",(0,n.jsx)(s.code,{children:"idx"})," 的一个样本"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"py","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"py","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" torch"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"utils"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"data "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Dataset"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"CustomDataset"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Dataset"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"):"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"__init__"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"self"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"file"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"):"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"super"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"__init__"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    self"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"data "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"read_file"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(file)"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"__len__"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"self"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"):"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"len"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(self.data)"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"__getitem__"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"self"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"idx"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"):"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" self"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"data"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"idx"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"})]})]})})]})}t(5675);let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/pytorch/dataset.md",route:"/pytorch/dataset",headings:[{depth:1,value:"数据集",id:"数据集"}],pageMap:[{kind:"Meta",data:{index:{title:"AI Notes",display:"hidden",theme:{sidebar:!1,breadcrumb:!1,toc:!1,timestamp:!1}},"traffic-prediction":{title:"交通预测",type:"page"},pytorch:{title:"PyTorch",type:"page"}}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"pytorch",route:"/pytorch",children:[{kind:"Meta",data:{dataset:"数据集",model:"模型"}},{kind:"MdxPage",name:"dataset",route:"/pytorch/dataset"},{kind:"MdxPage",name:"model",route:"/pytorch/model"}]},{kind:"Folder",name:"traffic-prediction",route:"/traffic-prediction",children:[{kind:"Meta",data:{index:"交通预测","traffic-flow-prediction":"交通流预测","vehicle-trajectory-prediction":"车辆轨迹预测","pedestrian-trajectory-prediction":"行人轨迹预测","dataset-storage":"数据集存储格式",gnn:"GNN"}},{kind:"MdxPage",name:"dataset-storage",route:"/traffic-prediction/dataset-storage"},{kind:"MdxPage",name:"gnn",route:"/traffic-prediction/gnn"},{kind:"MdxPage",name:"index",route:"/traffic-prediction"},{kind:"MdxPage",name:"pedestrian-trajectory-prediction",route:"/traffic-prediction/pedestrian-trajectory-prediction"},{kind:"MdxPage",name:"traffic-flow-prediction",route:"/traffic-prediction/traffic-flow-prediction"},{kind:"MdxPage",name:"vehicle-trajectory-prediction",route:"/traffic-prediction/vehicle-trajectory-prediction"}]}],flexsearch:{codeblocks:!0},title:"数据集"},pageNextRoute:"/pytorch/dataset",nextraLayout:i.ZP,themeConfig:o.Z};s.default=(0,r.j)(c)}},function(e){e.O(0,[774,331,888,179],function(){return e(e.s=7304)}),_N_E=e.O()}]);