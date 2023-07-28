# Alcatra Codegen

## Basic usage

```sh
alcatra component MyComp
```

### Required arguments

1. **type**: 'page' | 'component'
2. **name**: string

### Optional parameters
1. **wrapper**: string (component that should wrap the new component)

Ex.: 
```
alcatra page MyPage --wrapper=Card
```

2. **path**: string (specify your own path)

Ex.: 
```
alcatra component MyComp --path=src/components/Form/
```

