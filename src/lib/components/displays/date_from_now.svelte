<script lang="ts">
    import localizedFormat from 'dayjs/plugin/localizedFormat.js';
    import relativeTime from 'dayjs/plugin/relativeTime.js';
    import dayjs from 'dayjs';
    import { cn } from '@/lib/core/utils/index.js';
    import type { ElementProps } from '@/lib/core/contracts.js';
    import { compile, useContext } from '@/lib/core/index.js';

    dayjs.extend(localizedFormat);
    dayjs.extend(relativeTime);

    const props: ElementProps = $props();

    const context = useContext();
    const value = $derived(compile(typeof props === 'string' ? props : props.content, context.data));
    const relativeDatetime = $derived(value ? dayjs(value).fromNow() : '');
</script>

<span class={cn(props.class)}>{relativeDatetime}</span>
