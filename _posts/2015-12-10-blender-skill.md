---
layout: post
title: Blender 3D 技巧收集
---

### Modifiers cannot be applied to multi-user data

Press U \> Objects and Data. Then apply your modifier. Using just Object will make the object a new, separate datablock for the mesh (but will ignore modifiers). However, using Object and Data will make both the objects mesh and it's modifiers a new, separate datablock.