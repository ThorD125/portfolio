<template>
    &nbsp;&nbsp;<img class="w-5 h-5 my-auto" :src="getimage()">&nbsp;
</template>

<script lang="ts" setup>

    import LinkedIn from "@/assets/icons/linkedin.svg";
    import Github from "@/assets/icons/github.svg";
    import School from "@/assets/icons/school.svg";
    import Student from "@/assets/icons/student.svg";
    import Phone from "@/assets/icons/phone.svg";
    import Birthday from "@/assets/icons/birthday.svg";
    import Email from "@/assets/icons/email.svg";


    interface IProps {
        src: string;
    }
    const props = withDefaults(defineProps<IProps>(), {
        src: "test",
    });

    const getimage = () => {
        switch (props.src) {
            case "linkedin":
                return LinkedIn;
            case "github":
                return Github;
            case "school":
                return School;
            case "email":
                return Email;
            case "student":
                return Student;
            case "phone":
                return Phone;
            case "birthday":
                return Birthday;
            default:
                return "test";
        }
    };
</script>

<style scoped>
img {
    filter: invert(1);
    height: 100%;
}
</style>
