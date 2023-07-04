import { ref } from 'vue'

export default function useMousePoint() {
    const box = ref({
        x: 0,
        y: 0
    })

    const boxChang = (e: any) => {
        box.value.x = e.offsetX
        box.value.y = e.offsetY
    }

    return {box,boxChang}
}