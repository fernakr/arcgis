import{V as f,Q as R,x as _,aq as u,aj as T,al as g}from"./Theme-ecfa1738.js";class p extends f{_beforeChanged(){super._beforeChanged(),(this.isDirty("cornerRadiusTL")||this.isDirty("cornerRadiusTR")||this.isDirty("cornerRadiusBR")||this.isDirty("cornerRadiusBL"))&&(this._clear=!0)}_draw(){let s=this.width(),e=this.height(),t=s,i=e,l=t/Math.abs(s),c=i/Math.abs(e);if(_(t)&&_(i)){let b=Math.min(t,i)/2,r=u(this.get("cornerRadiusTL",8),b),n=u(this.get("cornerRadiusTR",8),b),o=u(this.get("cornerRadiusBR",8),b),h=u(this.get("cornerRadiusBL",8),b),d=Math.min(Math.abs(t/2),Math.abs(i/2));r=g(r,0,d),n=g(n,0,d),o=g(o,0,d),h=g(h,0,d);const a=this._display;a.moveTo(r*l,0),a.lineTo(t-n*l,0),n>0&&a.arcTo(t,0,t,n*c,n),a.lineTo(t,i-o*c),o>0&&a.arcTo(t,i,t-o*l,i,o),a.lineTo(h*l,i),h>0&&a.arcTo(0,i,0,i-h*c,h),a.lineTo(0,r*c),r>0&&a.arcTo(0,0,r*l,0,r),a.closePath()}}}Object.defineProperty(p,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RoundedRectangle"}),Object.defineProperty(p,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:f.classNames.concat([p.className])});class m extends R{_afterNew(){this._settings.themeTags=T(this._settings.themeTags,["button"]),super._afterNew(),this._settings.background||this.set("background",p.new(this._root,{themeTags:T(this._settings.themeTags,["background"])}))}_prepareChildren(){if(super._prepareChildren(),this.isDirty("icon")){const s=this._prevSettings.icon,e=this.get("icon");e!==s&&(this._disposeProperty("icon"),s&&s.dispose(),e&&this.children.push(e),this._prevSettings.icon=e)}if(this.isDirty("label")){const s=this._prevSettings.label,e=this.get("label");e!==s&&(this._disposeProperty("label"),s&&s.dispose(),e&&this.children.push(e),this._prevSettings.label=e)}}}Object.defineProperty(m,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Button"}),Object.defineProperty(m,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:R.classNames.concat([m.className])});export{p as n,m as o};
